import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function AddPaymentScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const tenantName = params.tenantName as string || 'John';
  const roomNumber = params.roomNumber as string || 'Room 1';
  const month = params.month as string || 'August';
  
  const [amount, setAmount] = useState('3500');
  const [notes, setNotes] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddPayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    // Here you would typically save the payment to your database
    Alert.alert(
      'Success', 
      `Payment of ₹${amount} added for ${tenantName} - ${roomNumber} for ${month}`,
      [
        {
          text: 'OK',
          onPress: () => router.back()
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
      setSelectedDate(selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.tenantName}>{tenantName}</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.roomNumber}>{roomNumber}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <ThemedView style={styles.inputRow}>
          <ThemedView style={styles.inputContainer}>
            <TouchableOpacity 
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <ThemedText style={styles.dateText}>{formatDate(selectedDate)}</ThemedText>
              <ThemedText style={styles.calendarIcon}>📅</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedView style={styles.inputContainer}>
            {/* <ThemedText style={styles.label}><ThemedText>Amount</ThemedText></ThemedText> */}
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="Enter amount"
              placeholderTextColor="#999"
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.notesContainer}>
          <TextInput
            style={styles.notesInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="Notes"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
        </ThemedView>

        <ThemedView style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={handleAddPayment}>
            <ThemedText style={styles.addButtonText}>Add payment</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
    </ThemedView>
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
  tenantName: {
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  roomNumber: {
    fontSize: 16,
  },
  form: {
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
     flexDirection: 'row',  // row of containers
  gap: 16,               // space between them
  marginBottom: 20,
  alignItems: 'flex-start',
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
    width: '90%'
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  calendarIcon: {
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 1,
  },
  amountInput: {
     borderWidth: 1,
     backgroundColor: '#F8F8F8',
  borderColor: '#ccc',
  borderRadius: 8,
  paddingVertical: 13,
  paddingHorizontal: 13,
  fontSize: 14,
  width: '90%',
  height: 48,
    // borderWidth: 1,
    // borderColor: '#E0E0E0',
    // borderRadius: 8,
    // padding: 10,
    // fontSize: 16,
    // backgroundColor: '#F8F8F8',
    // color: '#333',
   
  },
  
  notesContainer: {
    marginBottom: 30,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    color: '#333',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
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
  addButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
}); 