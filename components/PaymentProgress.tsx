import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface PaymentProgressProps {
  year: string;
  payments: {
    [month: string]: 'paid' | 'unpaid' | 'pending';
  };
  tenantName?: string;
  roomNumber?: string;
}

export function PaymentProgress({ year, payments, tenantName = 'John', roomNumber = 'Room 1' }: PaymentProgressProps) {
  const router = useRouter();
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

  const handleStatusPress = (month: string, status: 'paid' | 'unpaid' | 'pending') => {
    if (status === 'unpaid') {
      // Navigate to add payment screen for unpaid months (red dots)
      router.push({
        pathname: '/add-payment',
        params: {
          tenantName,
          roomNumber,
          month,
          year
        }
      });
    } else if (status === 'paid') {
      // Navigate to payment details screen for paid months (green ticks)
      router.push({
        pathname: '/payment-details',
        params: {
          tenantName,
          roomNumber,
          month,
          year
        }
      });
    }
    // For pending status, do nothing (or you could add a different action)
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
              <TouchableOpacity 
                key={month} 
                style={styles.statusItem}
                onPress={() => handleStatusPress(month, status)}
                disabled={status === 'pending'}
              >
                <ThemedText 
                  style={[
                    styles.statusIcon, 
                    { color: getStatusColor(status) }
                  ]}
                >
                  {getStatusIcon(status)}
                </ThemedText>
              </TouchableOpacity>
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