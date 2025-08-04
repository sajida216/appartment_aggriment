import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface PaymentProgressProps {
  year: string;
  payments: {
    [month: string]: 'paid' | 'unpaid' | 'pending';
  };
}

export function PaymentProgress({ year, payments }: PaymentProgressProps) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const textColor = useThemeColor({}, 'text');
  const iconColor = useThemeColor({}, 'icon');

  const getStatusIcon = (status: 'paid' | 'unpaid' | 'pending') => {
    switch (status) {
      case 'paid':
        return '✓';
      case 'unpaid':
        return '●';
      case 'pending':
        return '○';
      default:
        return '○';
    }
  };

  const getStatusColor = (status: 'paid' | 'unpaid' | 'pending') => {
    switch (status) {
      case 'paid':
        return '#4CAF50'; // Green
      case 'unpaid':
        return '#FF5722'; // Red
      case 'pending':
        return '#FFC107'; // Yellow
      default:
        return iconColor;
    }
  };

  return (
    <ThemedView style={styles.container}>
      {/* Months Row */}
      <View style={styles.monthsRow}>
        {months.map((month) => (
          <View key={month} style={styles.monthContainer}>
            <ThemedText style={[styles.monthText, { color: textColor }]}>
              {month}
            </ThemedText>
          </View>
        ))}
      </View>

      {/* Year and Status Row */}
      <View style={styles.yearStatusRow}>
        <ThemedText style={[styles.yearText, { color: textColor }]}>
          '{year.slice(-2)}
        </ThemedText>
        <View style={styles.statusContainer}>
          {months.map((month) => {
            const status = payments[month] || 'pending';
            return (
              <View key={month} style={styles.statusItem}>
                <ThemedText 
                  style={[
                    styles.statusIcon, 
                    { color: getStatusColor(status) }
                  ]}
                >
                  {getStatusIcon(status)}
                </ThemedText>
              </View>
            );
          })}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  monthsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  monthContainer: {
    flex: 1,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 10,
    fontWeight: '500',
  },
  yearStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearText: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 16,
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusItem: {
    flex: 1,
    alignItems: 'center',
  },
  statusIcon: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 