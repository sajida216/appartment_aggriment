import { Card } from '@/components/Card';
import { PaymentProgress } from '@/components/PaymentProgress';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ApartmentDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const apartmentName = params.name as string || 'SkyLine Apartments';

  // Sample payment data for each room
  const room1Payments: { [month: string]: 'paid' | 'unpaid' | 'pending' } = {
    Jan: 'paid',
    Feb: 'paid',
    Mar: 'paid',
    Apr: 'paid',
    May: 'paid',
    Jun: 'paid',
    Jul: 'paid',
    Aug: 'unpaid',
    Sep: 'pending',
    Oct: 'pending',
    Nov: 'pending',
    Dec: 'pending',
  };

  const room2Payments: { [month: string]: 'paid' | 'unpaid' | 'pending' } = {
    Jan: 'paid',
    Feb: 'paid',
    Mar: 'paid',
    Apr: 'paid',
    May: 'paid',
    Jun: 'paid',
    Jul: 'unpaid',
    Aug: 'unpaid',
    Sep: 'pending',
    Oct: 'pending',
    Nov: 'pending',
    Dec: 'pending',
  };

  const room3Payments: { [month: string]: 'paid' | 'unpaid' | 'pending' } = {
    Jan: 'paid',
    Feb: 'paid',
    Mar: 'paid',
    Apr: 'paid',
    May: 'paid',
    Jun: 'paid',
    Jul: 'paid',
    Aug: 'paid',
    Sep: 'pending',
    Oct: 'pending',
    Nov: 'pending',
    Dec: 'pending',
  };

  const room4Payments: { [month: string]: 'paid' | 'unpaid' | 'pending' } = {
    Jan: 'paid',
    Feb: 'paid',
    Mar: 'paid',
    Apr: 'paid',
    May: 'paid',
    Jun: 'paid',
    Jul: 'paid',
    Aug: 'paid',
    Sep: 'pending',
    Oct: 'pending',
    Nov: 'pending',
    Dec: 'pending',
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">{apartmentName}</ThemedText>
      </ThemedView>

      <Card>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 1:</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Andrew</ThemedText>
          <ThemedText> ₹ 3500 </ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room1Payments} />
      </Card>

      <Card>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 2:</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">John</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room2Payments} />
      </Card>

      <Card>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 3:</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Sarah</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room3Payments} />
      </Card>

      <Card>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 4:</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Mike</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room4Payments} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
}); 