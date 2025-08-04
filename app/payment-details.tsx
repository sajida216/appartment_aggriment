import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaymentDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const tenantName = params.tenantName as string || 'John';
  const roomNumber = params.roomNumber as string || 'Room 1';
  const month = params.month as string || 'August';
  const year = params.year as string || '2023';

  // Sample payment data - in a real app, this would come from your database
  const paymentData = {
    amount: '3500',
    paidDate: '15-Aug-2023',
    paymentMethod: 'Cash',
    notes: 'Rent payment for August 2023',
    receiptNumber: 'RCP-2023-001',
    status: 'Paid'
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.tenantName}>{tenantName}</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.roomNumber}>{roomNumber}</ThemedText>
        <ThemedText style={styles.monthYear}>{month} {year}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.paymentCard}>
        <ThemedView style={styles.statusBadge}>
          <ThemedText style={styles.statusText}>{paymentData.status}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.detailSection}>
          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Amount:</ThemedText>
            <ThemedText style={styles.detailValue}>₹ {paymentData.amount}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Paid Date:</ThemedText>
            <ThemedText style={styles.detailValue}>{paymentData.paidDate}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Payment Method:</ThemedText>
            <ThemedText style={styles.detailValue}>{paymentData.paymentMethod}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Receipt Number:</ThemedText>
            <ThemedText style={styles.detailValue}>{paymentData.receiptNumber}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.notesSection}>
          <ThemedText style={styles.notesLabel}>Notes:</ThemedText>
          <ThemedView style={styles.notesContainer}>
            <ThemedText style={styles.notesText}>{paymentData.notes}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.infoSection}>
          <ThemedText style={styles.infoText}>
            This payment has been recorded and cannot be edited. 
            For any corrections, please contact the property manager.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ThemedText style={styles.backButtonText}>Back to Details</ThemedText>
      </TouchableOpacity>
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
  tenantName: {
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  roomNumber: {
    fontSize: 16,
    marginBottom: 4,
  },
  monthYear: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  paymentCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  detailSection: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  notesSection: {
    marginBottom: 20,
  },
  notesLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  notesContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  notesText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoSection: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  infoText: {
    fontSize: 12,
    color: '#1976D2',
    fontStyle: 'italic',
  },
  backButton: {
    backgroundColor: '#666',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 