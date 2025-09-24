// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import {
//     Alert,
//     ScrollView,
//     StyleSheet,
//     TextInput,
//     TouchableOpacity
// } from 'react-native';

// interface Room {
//   id: string;
//   number: string;
//   tenantName: string;
//   rent: string;
//   status: 'occupied' | 'vacant';
// }

// export default function RoomManagementScreen() {
//   const router = useRouter();
//   const params = useLocalSearchParams();
//   const apartmentName = params.apartmentName as string || 'SkyLine Apartments';
  
//   // Check if we received updated room data from edit screen
//   const updatedRoomParam = params.updatedRoom as string;
  
//   const [rooms, setRooms] = useState<Room[]>([
//     { id: '1', number: 'Room 1', tenantName: 'Andrew', rent: '3500', status: 'occupied' },
//     { id: '2', number: 'Room 2', tenantName: 'John', rent: '3500', status: 'occupied' },
//     { id: '3', number: 'Room 3', tenantName: 'Sarah', rent: '3500', status: 'occupied' },
//     { id: '4', number: 'Room 4', tenantName: 'Mike', rent: '3500', status: 'occupied' },
//     { id: '5', number: 'Room 5', tenantName: '', rent: '', status: 'vacant' },
//     { id: '6', number: 'Room 6', tenantName: '', rent: '', status: 'vacant' },
//   ]);

//   // Update room data if we received updated data from edit screen
//   React.useEffect(() => {
//     if (updatedRoomParam) {
//       try {
//         const updatedRoom = JSON.parse(updatedRoomParam);
//         setRooms(prevRooms => 
//           prevRooms.map(room => 
//             room.number === updatedRoom.roomNumber 
//               ? { 
//                   ...room, 
//                   tenantName: updatedRoom.tenantName, 
//                   rent: updatedRoom.rent,
//                   status: updatedRoom.tenantName ? 'occupied' : 'vacant'
//                 }
//               : room
//           )
//         );
//       } catch (error) {
//         console.error('Error parsing updated room data:', error);
//       }
//     }
//   }, [updatedRoomParam]);

//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newRoomNumber, setNewRoomNumber] = useState('');
//   const [newTenantName, setNewTenantName] = useState('');
//   const [newRent, setNewRent] = useState('');

//   const handleAddRoom = () => {
//     if (!newRoomNumber.trim()) {
//       Alert.alert('Error', 'Please enter room number');
//       return;
//     }

//     if (!newRent.trim() || parseFloat(newRent) <= 0) {
//       Alert.alert('Error', 'Please enter a valid rent amount');
//       return;
//     }

//     const newRoom: Room = {
//       id: Date.now().toString(),
//       number: newRoomNumber,
//       tenantName: newTenantName || 'Vacant',
//       rent: newRent,
//       status: newTenantName ? 'occupied' : 'vacant'
//     };

//     setRooms([...rooms, newRoom]);
//     setNewRoomNumber('');
//     setNewTenantName('');
//     setNewRent('');
//     setShowAddForm(false);

//     Alert.alert('Success', `Room ${newRoomNumber} added successfully`);
//   };

//   const handleDeleteRoom = (roomId: string) => {
//     Alert.alert(
//       'Confirm Delete',
//       'Are you sure you want to delete this room?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: () => {
//             setRooms(rooms.filter(room => room.id !== roomId));
//           }
//         }
//       ]
//     );
//   };

//   const handleAddNewRoom = () => {
//     const nextRoomNumber = rooms.length + 1;
//     const newRoom: Room = {
//       id: Date.now().toString(),
//       number: `Room ${nextRoomNumber}`,
//       tenantName: '',
//       rent: '',
//       status: 'vacant'
//     };
//     setRooms([...rooms, newRoom]);
//     Alert.alert('Success', `Room ${nextRoomNumber} added successfully`);
//   };

//   const handleEditRoom = (room: Room) => {
//     router.push({
//       pathname: '/edit-room',
//       params: {
//         roomNumber: room.number,
//         apartmentName,
//         tenantName: room.tenantName,
//         rent: room.rent
//       }
//     });
//   };

//   const handleBack = () => {
//     // Pass updated room data back to apartment detail
//     router.push({
//       pathname: '/apartment-detail',
//       params: {
//         name: apartmentName,
//         rooms: JSON.stringify(rooms)
//       }
//     });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <ThemedView style={styles.header}>
//         <ThemedText type="title">{apartmentName}</ThemedText>
//         <ThemedText style={styles.subtitle}>Room Management</ThemedText>
//       </ThemedView>

//       <ThemedView style={styles.statsContainer}>
//         <ThemedView style={styles.statCard}>
//           <ThemedText style={styles.statNumber}>{rooms.length}</ThemedText>
//           <ThemedText style={styles.statLabel}>Total Rooms</ThemedText>
//         </ThemedView>
//         <ThemedView style={styles.statCard}>
//           <ThemedText style={styles.statNumber}>
//             {rooms.filter(room => room.status === 'occupied').length}
//           </ThemedText>
//           <ThemedText style={styles.statLabel}>Occupied</ThemedText>
//         </ThemedView>
//         <ThemedView style={styles.statCard}>
//           <ThemedText style={styles.statNumber}>
//             {rooms.filter(room => room.status === 'vacant').length}
//           </ThemedText>
//           <ThemedText style={styles.statLabel}>Vacant</ThemedText>
//         </ThemedView>
//       </ThemedView>

//       <ThemedView style={styles.roomsSection}>
//         <ThemedView style={styles.sectionHeader}>
//           <ThemedText style={styles.sectionTitle}>Rooms</ThemedText>
//           <TouchableOpacity 
//             style={styles.addRoomButton} 
//             onPress={() => setShowAddForm(!showAddForm)}
//           >
//             <ThemedText style={styles.addRoomButtonText}>
//               {showAddForm ? 'Cancel' : '+ Add Room'}
//             </ThemedText>
//           </TouchableOpacity>
//         </ThemedView>

//         {showAddForm && (
//           <ThemedView style={styles.addForm}>
//             <ThemedView style={styles.inputRow}>
//               <ThemedView style={styles.inputContainer}>
//                 <ThemedText style={styles.label}>Room Number</ThemedText>
//                 <TextInput
//                   style={styles.input}
//                   value={newRoomNumber}
//                   onChangeText={setNewRoomNumber}
//                   placeholder="e.g., Room 5"
//                   placeholderTextColor="#999"
//                 />
//               </ThemedView>
//               <ThemedView style={styles.inputContainer}>
//                 <ThemedText style={styles.label}>Rent Amount</ThemedText>
//                 <TextInput
//                   style={styles.input}
//                   value={newRent}
//                   onChangeText={setNewRent}
//                   placeholder="Enter rent"
//                   placeholderTextColor="#999"
//                   keyboardType="numeric"
//                 />
//               </ThemedView>
//             </ThemedView>
//             <ThemedView style={styles.inputContainer}>
//               <ThemedText style={styles.label}>Tenant Name (Optional)</ThemedText>
//               <TextInput
//                 style={styles.input}
//                 value={newTenantName}
//                 onChangeText={setNewTenantName}
//                 placeholder="Enter tenant name"
//                 placeholderTextColor="#999"
//               />
//             </ThemedView>
//             <TouchableOpacity style={styles.saveButton} onPress={handleAddRoom}>
//               <ThemedText style={styles.saveButtonText}>Add Room</ThemedText>
//             </TouchableOpacity>
//           </ThemedView>
//         )}

//                  {rooms.map((room) => (
//            <ThemedView key={room.id} style={styles.roomCard}>
//              <ThemedView style={styles.roomHeader}>
//                <ThemedText style={styles.roomNumber}>{room.number}</ThemedText>
//                <ThemedView style={[
//                  styles.statusBadge, 
//                  { backgroundColor: room.status === 'occupied' ? '#4CAF50' : '#FF9800' }
//                ]}>
//                  <ThemedText style={styles.statusText}>
//                    {room.status === 'occupied' ? 'Occupied' : 'Vacant'}
//                  </ThemedText>
//                </ThemedView>
//              </ThemedView>
             
//              <ThemedView style={styles.roomDetails}>
//                <ThemedView style={styles.detailRow}>
//                  <ThemedText style={styles.detailLabel}>Tenant:</ThemedText>
//                  <ThemedText style={styles.detailValue}>
//                    {room.tenantName || 'No tenant assigned'}
//                  </ThemedText>
//                </ThemedView>
//                <ThemedView style={styles.detailRow}>
//                  <ThemedText style={styles.detailLabel}>Rent:</ThemedText>
//                  <ThemedText style={styles.detailValue}>
//                    {room.rent ? `₹ ${room.rent}` : 'Not set'}
//                  </ThemedText>
//                </ThemedView>
//              </ThemedView>

//              <ThemedView style={styles.roomActions}>
//                {room.status === 'vacant' ? (
//                  <TouchableOpacity 
//                    style={styles.editButton} 
//                    onPress={() => handleEditRoom(room)}
//                  >
//                    <ThemedText style={styles.editButtonText}>Add Details</ThemedText>
//                  </TouchableOpacity>
//                ) : (
//                  <TouchableOpacity 
//                    style={styles.editButton} 
//                    onPress={() => handleEditRoom(room)}
//                  >
//                    <ThemedText style={styles.editButtonText}>Edit</ThemedText>
//                  </TouchableOpacity>
//                )}
               
//                <TouchableOpacity 
//                  style={styles.deleteButton} 
//                  onPress={() => handleDeleteRoom(room.id)}
//                >
//                  <ThemedText style={styles.deleteButtonText}>Delete</ThemedText>
//                </TouchableOpacity>
//              </ThemedView>
//            </ThemedView>
//          ))}
//       </ThemedView>

//              <ThemedView style={styles.bottomButtons}>
//          <TouchableOpacity style={styles.addRoomBottomButton} onPress={handleAddNewRoom}>
//            <ThemedText style={styles.addRoomBottomButtonText}>+ Add New Room</ThemedText>
//          </TouchableOpacity>
         
//          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
//            <ThemedText style={styles.backButtonText}>Back to Details</ThemedText>
//          </TouchableOpacity>
//        </ThemedView>
//      </ScrollView>
//    );
//  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 4,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginHorizontal: 4,
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 4,
//   },
//   roomsSection: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   addRoomButton: {
//     backgroundColor: '#2196F3',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 6,
//   },
//   addRoomButtonText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   addForm: {
//     backgroundColor: '#F8F8F8',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   inputRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 12,
//   },
//   inputContainer: {
//     flex: 1,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginBottom: 4,
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 6,
//     padding: 8,
//     fontSize: 14,
//     backgroundColor: 'white',
//     color: '#333',
//   },
//   saveButton: {
//     backgroundColor: '#4CAF50',
//     padding: 8,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   roomCard: {
//     backgroundColor: '#F8F8F8',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   roomHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   roomNumber: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   statusText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   roomDetails: {
//     marginBottom: 12,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   detailLabel: {
//     fontSize: 14,
//     color: '#666',
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   deleteButton: {
//     backgroundColor: '#FF5722',
//     padding: 6,
//     borderRadius: 4,
//     alignItems: 'center',
//   },
//      deleteButtonText: {
//      color: 'white',
//      fontSize: 12,
//      fontWeight: '600',
//    },
//    roomActions: {
//      flexDirection: 'row',
//      gap: 8,
//      marginTop: 8,
//    },
//    editButton: {
//      backgroundColor: '#2196F3',
//      padding: 6,
//      borderRadius: 4,
//      flex: 1,
//      alignItems: 'center',
//    },
//    editButtonText: {
//      color: 'white',
//      fontSize: 12,
//      fontWeight: '600',
//    },
//    bottomButtons: {
//      gap: 12,
//      marginTop: 20,
//    },
//    addRoomBottomButton: {
//      backgroundColor: '#4CAF50',
//      padding: 16,
//      borderRadius: 8,
//      alignItems: 'center',
//    },
//    addRoomBottomButtonText: {
//      color: 'white',
//      fontSize: 16,
//      fontWeight: '600',
//    },
//    backButton: {
//      backgroundColor: '#666',
//      padding: 16,
//      borderRadius: 8,
//      alignItems: 'center',
//    },
//    backButtonText: {
//      color: 'white',
//      fontSize: 16,
//      fontWeight: '600',
//    },
// }); 