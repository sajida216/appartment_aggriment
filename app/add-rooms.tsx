import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function AddApartmentScreen() {
  const router = useRouter();
  const [roomName, setRoomName] = useState('');
  const [address, setAddress] = useState('');
  const [totalRooms, setTotalRooms] = useState('');
  const [rooms, setRooms] = useState<Array<{ number: string; tenantName: string; rent: string }>>([]);

  const handleAddRoom = () => {
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

  const updateRoom = (index: number, field: 'tenantName' | 'rent', value: string) => {
    const updatedRooms = [...rooms];
    updatedRooms[index] = { ...updatedRooms[index], [field]: value };
    setRooms(updatedRooms);
  };

  const handleSaveApartment = () => {
    if (!roomName.trim()) {
      Alert.alert('Error', 'Please enter room name');
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

    // Calculate occupied rooms (rooms with tenant names)
    const occupiedRooms = rooms.filter(room => room.tenantName.trim() !== '').length;

    // Here you would typically save the apartment and rooms to your database
    Alert.alert(
      'Success', 
      `Room "${roomName}" created with ${rooms.length} rooms`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to home with the new apartment data  /(tabs)
            router.push({
              pathname: '/(tabs)',
              params: {
                newApartment: JSON.stringify({
                  id: Date.now().toString(),
                  name: roomName,
                  address: address,
                  // totalRooms: rooms.length,
                  // occupiedRooms: occupiedRooms,
                  // rentDue: 0
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
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Add New Room </ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Room Number</ThemedText>
          <TextInput
            style={styles.input}
            value={roomName}
            onChangeText={setRoomName}
            placeholder="Enter room name"
            placeholderTextColor="#999"
          />
        </ThemedView>

        {/* <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Address </ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter apartment address"
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
          />
        </ThemedView> */}

        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Join Date</ThemedText>
          <View style={styles.roomInputRow}>
            <TextInput
              style={[styles.input, styles.roomInput]}
              value={totalRooms}
              onChangeText={setTotalRooms}
              placeholder="Enter number of rooms"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.addRoomButton} onPress={handleAddRoom}>
              <ThemedText style={styles.addRoomButtonText}>Add Rooms</ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>

        {rooms.length > 0 && (
          <ThemedView style={styles.roomsSection}>
            <ThemedText style={styles.sectionTitle}>Room Details</ThemedText>
            {rooms.map((room, index) => (
              <ThemedView key={index} style={styles.roomCard}>
                <ThemedText style={styles.roomNumber}>{room.number}</ThemedText>
                
                <ThemedView style={styles.roomInputRow}>
                  <ThemedView style={styles.roomInputContainer}>
                    <ThemedText style={styles.roomLabel}>Tenant Name</ThemedText>
                    <TextInput
                      style={styles.roomInput}
                      value={room.tenantName}
                      onChangeText={(value) => updateRoom(index, 'tenantName', value)}
                      placeholder="Enter tenant name"
                      placeholderTextColor="#999"
                    />
                  </ThemedView>
                  
                  <ThemedView style={styles.roomInputContainer}>
                    <ThemedText style={styles.roomLabel}>Rent Amount</ThemedText>
                    <TextInput
                      style={styles.roomInput}
                      value={room.rent}
                      onChangeText={(value) => updateRoom(index, 'rent', value)}
                      placeholder="Enter rent"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                    />
                  </ThemedView>
                </ThemedView>
              </ThemedView>
            ))}
          </ThemedView>
        )}
      </ThemedView>
      <ThemedView style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveApartment}>
          <ThemedText style={styles.saveButtonText}>Save Apartment</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    color: '#333',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  roomInputRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },
  roomInput: {
    flex: 1,
  },
  addRoomButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addRoomButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  roomsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  roomCard: {
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  roomNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  roomInputContainer: {
    flex: 1,
  },
  roomLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
    marginBottom: 8,
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  saveButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    top:10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
}); 














// import React from 'react';
// import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { Card } from '../components/Card';
// import { ThemedText } from '../components/ThemedText';
// import { ThemedView } from '../components/ThemedView';
// import { router } from 'expo-router';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// // onPress={handleAddApartment}
// export default function Addrooms() {
//     const router = useRouter();
//     const params = useLocalSearchParams();

//     const handleAddRoom = () => {
//         router.push('/add-apartment');
//       };
    
//     return (
//         <ScrollView>
//             <Card>
//                 <ThemedView style={styles.infoRow}>
//                     <TouchableOpacity style={styles.addButton} onPress={handleAddRoom}>
//                         <ThemedText style={styles.addRoomButtonText} >+</ThemedText>
//                     </TouchableOpacity>
//                 </ThemedView>
//             </Card>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     infoRow: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         // justifyContent: 'space-between',
//         marginBottom: 8,
//     },
//     addRoomButtonText: {
//         color: 'black',
//         fontSize: 44,
//         fontWeight: '600',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     addButton: {
//         // backgroundColor: '#4CAF50',
//         width: 60, // or match parent width
//         height: 60,
//         // borderRadius: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // elevation: 4,
//         // shadowColor: '#000',
//     },
// })
// {/* 
// <ThemedView style={styles.infoRow}>
// <ThemedText type="defaultSemiBold">Andrew</ThemedText>
// <ThemedText> ₹ 3500 </ThemedText>
// </ThemedView>
// <PaymentProgress year="2023" payments={room1Payments} tenantName="Andrew" roomNumber="Room 1" /> */}