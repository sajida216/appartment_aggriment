import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function EditRoomScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const roomNumber = params.roomNumber as string || 'Room 1';
  const apartmentName = params.apartmentName as string || 'SkyLine Apartments';
  
  const [tenantName, setTenantName] = useState('');
  const [rent, setRent] = useState('');
  const [moveInDate, setMoveInDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  const handleSaveRoom = () => {
    if (!tenantName.trim()) {
      Alert.alert('Error', 'Please enter tenant name');
      return;
    }

    if (!rent.trim() || parseFloat(rent) <= 0) {
      Alert.alert('Error', 'Please enter a valid rent amount');
      return;
    }

    // Here you would typically save the room details to your database
    Alert.alert(
      'Success', 
      `Room ${roomNumber} updated successfully with tenant ${tenantName}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to room management with updated data
            router.push({
              pathname: '/room-management',
              params: {
                apartmentName,
                updatedRoom: JSON.stringify({
                  roomNumber,
                  tenantName,
                  rent,
                  moveInDate: moveInDate.toISOString().split('T')[0]
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

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setMoveInDate(selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">{apartmentName}</ThemedText>
        <ThemedText style={styles.roomNumber}>{roomNumber}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Tenant Name *</ThemedText>
          <TextInput
            style={styles.input}
            value={tenantName}
            onChangeText={setTenantName}
            placeholder="Enter tenant name"
            placeholderTextColor="#999"
          />
        </ThemedView>

        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Rent Amount *</ThemedText>
          <TextInput
            style={styles.input}
            value={rent}
            onChangeText={setRent}
            placeholder="Enter rent amount"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </ThemedView>

        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Phone Number</ThemedText>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </ThemedView>

        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Move-in Date</ThemedText>
          <TouchableOpacity 
            style={styles.dateInput}
            onPress={() => setShowDatePicker(true)}
          >
            <ThemedText style={styles.dateText}>{formatDate(moveInDate)}</ThemedText>
            <ThemedText style={styles.calendarIcon}>📅</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.inputSection}>
          <ThemedText style={styles.label}>Notes</ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Add any additional notes"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
        </ThemedView>

        <ThemedView style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveRoom}>
            <ThemedText style={styles.saveButtonText}>Save Room</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {showDatePicker && (
        <DateTimePicker
          value={moveInDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
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
    alignItems: 'center',
  },
  roomNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 4,
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
    minHeight: 100,
    textAlignVertical: 'top',
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#F8F8F8',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  calendarIcon: {
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
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
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
}); 