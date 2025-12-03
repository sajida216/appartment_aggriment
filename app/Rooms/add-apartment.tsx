import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { ThemedText } from '../../components/ThemedText';

export default function AddApartmentScreen() {
  const router = useRouter();
  const [apartmentName, setApartmentName] = useState('');
  const [address, setAddress] = useState('');
  const [totalRooms, setTotalRooms] = useState('');
  const [rooms, setRooms] = useState([]);

  const handleAddRooms = () => {
    if (!totalRooms || parseInt(totalRooms) <= 0) {
      Alert.alert('Error', 'Please enter a valid number of rooms');
      return;
    }

    const roomCount = parseInt(totalRooms);
    const newRooms = [];

    for (let i = 1; i <= roomCount; i++) {
      newRooms.push({
        number: `Room ${i}`,
        tenantName: '',
        rent: ''
      });
    }

    setRooms(newRooms);
  };

  const handleSave = () => {
    if (!apartmentName.trim()) {
      Alert.alert('Error', 'Please enter apartment name');
      return;
    }

    if (!address.trim()) {
      Alert.alert('Error', 'Please enter apartment address');
      return;
    }

    if (rooms.length === 0) {
      Alert.alert('Error', 'Please add rooms first');
      return;
    }

    const occupiedRooms = rooms.filter(room => room.tenantName.trim() !== '').length;

    Alert.alert(
      'Success',
      `Apartment "${apartmentName}" created with ${rooms.length} rooms`,
      [
        {
          text: 'OK',
          onPress: () => {
            router.push({
              pathname: '/(tabs)',
              params: {
                newApartment: JSON.stringify({
                  id: Date.now().toString(),
                  name: apartmentName,
                  address: address,
                  totalRooms: rooms.length,
                  occupiedRooms: occupiedRooms,
                  rentDue: 0
                })
              }
            });
          }
        }
      ]
    );
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.header}>
  <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
    <AntDesign name="arrow-left" size={24} color="#000" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Add New Apartment</Text>
</View>


      <Text style={styles.label}>Apartment Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter apartment name"
        value={apartmentName}
        onChangeText={setApartmentName}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter apartment address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Number of Rooms</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter number of rooms"
          value={totalRooms}
          onChangeText={setTotalRooms}
          keyboardType="numeric"
        />
        {/* <TouchableOpacity style={styles.addRoomButton} onPress={handleAddRooms}>
          <Text style={styles.addRoomText}>Add Rooms</Text>
        </TouchableOpacity> */}
      </View>

      {/* Buttons section */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 40,       // gives space from top (like most mobile apps)
  marginBottom: 20,    // some space below the header
},
backButton: {
  marginRight: 10,     // space between arrow and title
  padding: 6,          // slightly larger touch area
},
headerTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#222',
},

  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addRoomButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 10,
  },
  addRoomText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 14,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// // import {
// //     Alert,
// //     ScrollView,
// //     StyleSheet,
// //     TextInput,
// //     TouchableOpacity,
// //     View
// // } from 'react-native';

// export default function AddApartmentScreen() {
//   //new part 
//   //  const [apartmentName, setApartmentName] = useState('');
//   // const [address, setAddress] = useState('');
//   // const [rooms, setRooms] = useState('');

//   const handleAddRooms = () => {
//     // your logic for adding rooms
//   };

//   const handleSave = () => {
//     // your logic for saving apartment
//   };

//   // const handleCancel = () => {
//   //   // your logic for cancel
//   // }; //till here

//   const router = useRouter();
//   const [apartmentName, setApartmentName] = useState('');
//   const [address, setAddress] = useState('');
//   const [totalRooms, setTotalRooms] = useState('');
//   const [rooms, setRooms] = useState<Array<{ number: string; tenantName: string; rent: string }>>([]);

//   const handleAddRoom = () => {
//     if (!totalRooms || parseInt(totalRooms) <= 0) {
//       Alert.alert('Error', 'Please enter a valid number of rooms');
//       return;
//     }

//     const roomCount = parseInt(totalRooms);
//     const newRooms = [];
    
//     for (let i = 1; i <= roomCount; i++) {
//       newRooms.push({
//         number: `Room ${i}`,
//         tenantName: '',
//         rent: ''
//       });
//     }
    
//     setRooms(newRooms);
//   };

//   const updateRoom = (index: number, field: 'tenantName' | 'rent', value: string) => {
//     const updatedRooms = [...rooms];
//     updatedRooms[index] = { ...updatedRooms[index], [field]: value };
//     setRooms(updatedRooms);
//   };

//   const handleSaveApartment = () => {
//     if (!apartmentName.trim()) {
//       Alert.alert('Error', 'Please enter apartment name');
//       return;
//     }

//     if (!address.trim()) {
//       Alert.alert('Error', 'Please enter apartment address');
//       return;
//     }

//     if (rooms.length === 0) {
//       Alert.alert('Error', 'Please add rooms first');
//       return;
//     }

//     // Calculate occupied rooms (rooms with tenant names)
//     const occupiedRooms = rooms.filter(room => room.tenantName.trim() !== '').length;

//     // Here you would typically save the apartment and rooms to your database
//     Alert.alert(
//       'Success', 
//       `Apartment "${apartmentName}" created with ${rooms.length} rooms`,
//       [
//         {
//           text: 'OK',
//           onPress: () => {
//             // Navigate back to home with the new apartment data
//             router.push({
//               pathname: '/(tabs)',
//               params: {
//                 newApartment: JSON.stringify({
//                   id: Date.now().toString(),
//                   name: apartmentName,
//                   address: address,
//                   totalRooms: rooms.length,
//                   occupiedRooms: occupiedRooms,
//                   rentDue: 0
//                 })
//               }
//             });
//           }
//         }
//       ]
//     );
//   };

//   const handleCancel = () => {
//     router.back();
//   };
//  return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Add New Apartment</Text>

//       <Text style={styles.label}>Apartment Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter apartment name"
//         value={apartmentName}
//         onChangeText={setApartmentName}
//       />

//       <Text style={styles.label}>Address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter apartment address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <Text style={styles.label}>Number of Rooms</Text>
//       <View style={styles.row}>
//         <TextInput
//           style={[styles.input, { flex: 1 }]}
//           placeholder="Enter number of rooms"
//           value={rooms}
//           onChangeText={setRooms}
//         />
//         <TouchableOpacity style={styles.addRoomButton} onPress={handleAddRooms}>
//           <Text style={styles.addRoomText}>Add Rooms</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Buttons section */}
//       <View style={styles.buttonRow}>
//         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.saveText}>Save Apartment</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff', // light background
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#222',
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     color: '#444',
//     marginBottom: 6,
//     marginTop: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   addRoomButton: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 8,
//     marginLeft: 10,
//   },
//   addRoomText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 30,
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#eee',
//     padding: 14,
//     borderRadius: 8,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   saveButton: {
//     flex: 1,
//     backgroundColor: '#4CAF50',
//     padding: 14,
//     borderRadius: 8,
//     marginLeft: 10,
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   saveText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
   

// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }} >
// //       <ThemedView style={styles.header} lightColor="#f0f8ff"
// //             darkColor="#1a1a2e">
// //         <ThemedText type="title">Add New Apartment</ThemedText>
// //       </ThemedView>

// //       <ThemedView style={styles.form}
// //        lightColor="#f0f8ff"
// //        darkColor="#1a1a2e">
// //         <ThemedView style={styles.inputSection}>
// //           <ThemedText style={styles.label} lightColor="#f0f8ff"
// //             darkColor="#1a1a2e">Apartment Name</ThemedText>
// //           <TextInput
// //             style={styles.input}
// //             value={apartmentName}
// //             onChangeText={setApartmentName}
// //             placeholder="Enter apartment name"
// //             placeholderTextColor="#999"
// //           />
// //         </ThemedView>

// //         <ThemedView style={styles.inputSection}>
// //           <ThemedText style={styles.label}>Address</ThemedText>
// //           <TextInput
// //             style={[styles.input, styles.textArea]}
// //             value={address}
// //             onChangeText={setAddress}
// //             placeholder="Enter apartment address"
// //             placeholderTextColor="#999"
// //             multiline
// //             numberOfLines={3}
// //           />
// //         </ThemedView>

// //         <ThemedView style={styles.inputSection}>
// //           <ThemedText style={styles.label}>Number of Rooms</ThemedText>
// //           <View style={styles.roomInputRow}>
// //             <TextInput
// //               style={[styles.input, styles.roomInput]}
// //               value={totalRooms}
// //               onChangeText={setTotalRooms}
// //               placeholder="Enter number of rooms"
// //               placeholderTextColor="#999"
// //               keyboardType="numeric"
// //             />
// //             <TouchableOpacity style={styles.addRoomButton} onPress={handleAddRoom}>
// //               <ThemedText style={styles.addRoomButtonText}>Add Rooms</ThemedText>
// //             </TouchableOpacity>
// //           </View>
// //         </ThemedView>

// //         {rooms.length > 0 && (
// //           <ThemedView style={styles.roomsSection}>
// //             <ThemedText style={styles.sectionTitle}>Room Details</ThemedText>
// //             {rooms.map((room, index) => (
// //               <ThemedView key={index} style={styles.roomCard}>
// //                 <ThemedText style={styles.roomNumber}>{room.number}</ThemedText>
                
// //                 <ThemedView style={styles.roomInputRow}>
// //                   <ThemedView style={styles.roomInputContainer}>
// //                     <ThemedText style={styles.roomLabel}>Tenant Name</ThemedText>
// //                     <TextInput
// //                       style={styles.roomInput}
// //                       value={room.tenantName}
// //                       onChangeText={(value) => updateRoom(index, 'tenantName', value)}
// //                       placeholder="Enter tenant name"
// //                       placeholderTextColor="#999"
// //                     />
// //                   </ThemedView>
                  
// //                   <ThemedView style={styles.roomInputContainer}>
// //                     <ThemedText style={styles.roomLabel}>Rent Amount</ThemedText>
// //                     <TextInput
// //                       style={styles.roomInput}
// //                       value={room.rent}
// //                       onChangeText={(value) => updateRoom(index, 'rent', value)}
// //                       placeholder="Enter rent"
// //                       placeholderTextColor="#999"
// //                       keyboardType="numeric"
// //                     />
// //                   </ThemedView>
// //                 </ThemedView>
// //               </ThemedView>
// //             ))}
// //           </ThemedView>
// //         )}
// //       </ThemedView>
// //       <ThemedView style={styles.buttonRow}>
// //         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
// //           <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.saveButton} onPress={handleSaveApartment}>
// //           <ThemedText style={styles.saveButtonText}>Save Apartment</ThemedText>
// //         </TouchableOpacity>
// //       </ThemedView>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   header: {
// //     marginBottom: 30,
// //   },
// //   form: {
// //     flex: 1,
// //   },
// //   inputSection: {
// //     marginBottom: 20,
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     marginBottom: 8,
// //     color: '#333',
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: '#E0E0E0',
// //     borderRadius: 8,
// //     padding: 12,
// //     fontSize: 16,
// //     backgroundColor: '#F8F8F8',
// //     color: '#333',
// //   },
// //   textArea: {
// //     minHeight: 80,
// //     textAlignVertical: 'top',
// //   },
// //   roomInputRow: {
// //     flexDirection: 'row',
// //     gap: 12,
// //     alignItems: 'flex-end',
// //   },
// //   roomInput: {
// //     flex: 1,
// //   },
// //   addRoomButton: {
// //     backgroundColor: '#2196F3',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderRadius: 8,
// //   },
// //   addRoomButtonText: {
// //     color: 'white',
// //     fontSize: 14,
// //     fontWeight: '600',
// //   },
// //   roomsSection: {
// //     marginBottom: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     marginBottom: 16,
// //     color: '#333',
// //   },
// //   roomCard: {
// //     backgroundColor: '#F8F8F8',
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 12,
// //     borderWidth: 1,
// //     borderColor: '#E0E0E0',
// //   },
// //   roomNumber: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     marginBottom: 12,
// //     color: '#333',
// //   },
// //   roomInputContainer: {
// //     flex: 1,
// //   },
// //   roomLabel: {
// //     fontSize: 14,
// //     fontWeight: '500',
// //     marginBottom: 4,
// //     color: '#666',
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     gap: 16,
// //     marginTop: 32,
// //     marginBottom: 8,
// //   },
// //   cancelButton: {
// //     flex: 1,
// //     padding: 16,
// //     borderRadius: 8,
// //     backgroundColor: '#F0F0F0',
// //     alignItems: 'center',
// //   },
// //   cancelButtonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#666',
// //   },
// //   saveButton: {
// //     flex: 1,
// //     padding: 16,
// //     borderRadius: 8,
// //     backgroundColor: '#4CAF50',
// //     alignItems: 'center',
// //     top:10,
// //   },
// //   saveButtonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: 'white',
// //   },
// // }); 














// // import React from 'react';
// // import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// // import { Card } from '../components/Card';
// // import { ThemedText } from '../components/ThemedText';
// // import { ThemedView } from '../components/ThemedView';
// // import { router } from 'expo-router';
// // import { useRouter, useLocalSearchParams } from 'expo-router';
// // // onPress={handleAddApartment}
// // export default function Addrooms() {
// //     const router = useRouter();
// //     const params = useLocalSearchParams();

// //     const handleAddRoom = () => {
// //         router.push('/add-apartment');
// //       };
    
// //     return (
// //         <ScrollView>
// //             <Card>
// //                 <ThemedView style={styles.infoRow}>
// //                     <TouchableOpacity style={styles.addButton} onPress={handleAddRoom}>
// //                         <ThemedText style={styles.addRoomButtonText} >+</ThemedText>
// //                     </TouchableOpacity>
// //                 </ThemedView>
// //             </Card>
// //         </ScrollView>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     infoRow: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         flexDirection: 'row',
// //         // justifyContent: 'space-between',
// //         marginBottom: 8,
// //     },
// //     addRoomButtonText: {
// //         color: 'black',
// //         fontSize: 44,
// //         fontWeight: '600',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     addButton: {
// //         // backgroundColor: '#4CAF50',
// //         width: 60, // or match parent width
// //         height: 60,
// //         // borderRadius: 2,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         // elevation: 4,
// //         // shadowColor: '#000',
// //     },
// // })
// // {/* 
// // <ThemedView style={styles.infoRow}>
// // <ThemedText type="defaultSemiBold">Andrew</ThemedText>
// // <ThemedText> ₹ 3500 </ThemedText>
// // </ThemedView>
// // <PaymentProgress year="2023" payments={room1Payments} tenantName="Andrew" roomNumber="Room 1" /> */}