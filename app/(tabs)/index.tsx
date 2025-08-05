import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import { Card } from '@/components/Card';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Apartment {
  id: string;
  name: string;
  address: string;
  totalRooms: number;
  occupiedRooms: number;
  rentDue: number;
}

export default function HomeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [apartments, setApartments] = useState<Apartment[]>([
    {
      id: '1',
      name: 'SkyLine Apartments',
      address: '123 Main Street',
      totalRooms: 20,
      occupiedRooms: 12,
      rentDue: 4
    },
    {
      id: '2',
      name: 'Sunset Gardens',
      address: '456 Oak Avenue',
      totalRooms: 15,
      occupiedRooms: 10,
      rentDue: 2
    }
  ]);

  // Listen for new apartment data from add apartment screen
  useEffect(() => {
    if (params.newApartment) {
      try {
        const newApartment = JSON.parse(params.newApartment as string);
        setApartments(prev => [...prev, newApartment]);
      } catch (error) {
        console.error('Error parsing new apartment data:', error);
      }
    }
  }, [params.newApartment]);

  const handleCardPress = (apartment: Apartment) => {
    router.push(`/apartment-detail?name=${apartment.name}`);
  };

  const handleAddApartment = () => {
    router.push('/add-apartment');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.headerContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        <TouchableOpacity style={styles.addButton} onPress={handleAddApartment}>
          <ThemedText style={styles.addButtonText}>+</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      
      {apartments.length === 0 ? (
        <ThemedView style={styles.emptyState}>
          <ThemedText style={styles.emptyStateText}>No apartments yet</ThemedText>
          <ThemedText style={styles.emptyStateSubtext}>Tap the + button to add your first apartment</ThemedText>
        </ThemedView>
      ) : (
        apartments.map((apartment) => (
          <Card 
            key={apartment.id}
            title={apartment.name} 
            style={styles.complexCard}
            lightColor="#f0f8ff"
            darkColor="#1a1a2e"
            padding={20}
            borderRadius={16}
            elevation={4}
            onPress={() => handleCardPress(apartment)}>
            <ThemedView  
              lightColor="#f0f8ff"
              darkColor="#1a1a2e"
              style={styles.infoRow}>
              <ThemedText type="defaultSemiBold">Rooms Available:</ThemedText>
              <ThemedText>{apartment.totalRooms - apartment.occupiedRooms}</ThemedText>
            </ThemedView>
            <ThemedView 
              lightColor="#f0f8ff"
              darkColor="#1a1a2e"
              style={styles.infoRow}>
              <ThemedText type="defaultSemiBold">Rooms Occupied:</ThemedText>
              <ThemedText>{apartment.occupiedRooms}</ThemedText>
            </ThemedView>
            <ThemedView  
              lightColor="#f0f8ff"
              darkColor="#1a1a2e"
              style={styles.infoRow}>
              <ThemedText type="defaultSemiBold">Rent Due:</ThemedText>
              <ThemedText>{apartment.rentDue}</ThemedText>
            </ThemedView>
          </Card>
        ))
      )}

     

      

      
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  complexCard: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  marginTop: {
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});
