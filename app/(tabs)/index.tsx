import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
// import { apartment } from "../Rooms/apartment-detail";
import { Card } from '@/components/Card';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { isProtectedReactElement } from 'expo-router/build/views/Protected';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ScrollView} from 'react-native';
//import LogoutIcon from '../Logout-icon';

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
    },
    {
      id: '3',
      name: 'Sunset Gardens',
      address: '456 Oak Avenue',
      totalRooms: 15,
      occupiedRooms: 10,
      rentDue: 3
    },
    {
      id: '4',
      name: 'SkyLine Apartments',
      address: '123 Main Street',
      totalRooms: 20,
      occupiedRooms: 12,
      rentDue: 4
    },
    {
      id: '5',
      name: 'SkyLine Apartments',
      address: '123 Main Street',
      totalRooms: 20,
      occupiedRooms: 12,
      rentDue: 4
    },
    
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
    router.push(`../Rooms/apartment-detail?name=${apartment.name}`);
  };

  const handleAddApartment = () => {
    router.push('/Rooms/add-apartment');
  };

  const handleSettingsIcon = () => {
    router.push('/Settingsicon');
  };

  return (
    <ThemedView style={{ flex: 1 }}>

  {/* SETTINGS BUTTON */}
  <ThemedView style={styles.settingsbtn}>
    <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsIcon}>
      <ThemedText style={styles.addButtonText}>A</ThemedText>
    </TouchableOpacity>
  </ThemedView>

  {/* ADD BUTTON */}
  <ThemedView style={styles.addbtn}>
    <TouchableOpacity style={styles.addButton} onPress={handleAddApartment}>
      <ThemedText style={styles.PlusButtonText}>+</ThemedText>
    </TouchableOpacity>
  </ThemedView>

  {apartments.length === 0 ? (
    <ThemedView style={styles.emptyState}>
      <ThemedText style={styles.emptyStateText}>No apartments yet</ThemedText>
      <ThemedText style={styles.emptyStateSubtext}>
        Tap the + button to add your first apartment
      </ThemedText>
    </ThemedView>
  ) : (
    <ScrollView
      style={{ flex: 1 }}   // ⭐ IMPORTANT
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    >
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          title={apartment.name}
          style={styles.complexCard}
          lightColor="#f0f8ff"
          darkColor="#1a1a2e"
          padding={22}
          borderRadius={16}
          elevation={4}
          onPress={() => handleCardPress(apartment)}
        >
          <ThemedView lightColor="#f0f8ff" darkColor="#1a1a2e" style={styles.infoRow}>
            <ThemedText type="defaultSemiBold" style={{ color: 'green' }}>
              Rooms Available:
            </ThemedText>
            <ThemedText style={{ color: 'green' }}>
              {apartment.totalRooms - apartment.occupiedRooms}
            </ThemedText>
          </ThemedView>

          <ThemedView lightColor="#f0f8ff" darkColor="#1a1a2e" style={styles.infoRow}> 
          <ThemedText type="defaultSemiBold">Rooms Occupied:</ThemedText> 
          <ThemedText>{apartment.occupiedRooms}</ThemedText> </ThemedView>

          <ThemedView lightColor="#f0f8ff" darkColor="#1a1a2e" style={styles.infoRow}>
            <ThemedText type="defaultSemiBold" style={{ color: 'red' }}>
              Rent Due:
            </ThemedText>
            <ThemedText style={{ color: 'red' }}>
              {apartment.rentDue}
            </ThemedText>
          </ThemedView>
        </Card>
      ))}
    </ScrollView>
  )}
</ThemedView>

  );
}

const styles = StyleSheet.create({
  // headerContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 20,
    
  // },
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },listContainer: {
  listContainer: {
  paddingBottom: 120, // ⭐ allows scrolling to last card
  paddingTop:1,
},
// complexCard: {
//     marginBottom: 10,
//   },
complexCard: {
  marginBottom: 7,
  // marginBottom: 8,
},
   container: {
    flex: 1,
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
    fontSize: 25,
    fontWeight: 'bold',
    right:2,
  },
  PlusButtonText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addbtn:{
  position: 'absolute',  // makes it float over other elements
  bottom: 20,            // distance from bottom
  right: 50,             // distance from right
  zIndex: 10,            // ensures it stays above the card
  alignItems: 'center',
  justifyContent: 'center'
//     flex:1,
//     paddingTop:100,
//   paddingRight:30,
// alignItems:'flex-end',
 },

 settingsButton:{
   backgroundColor: '#c9455baa',
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
 
  settingsbtn:{
    flex:1,
    paddingTop:50,
    paddingRight:30,
    alignItems:'flex-end',
    maxHeight:100,
 },
  
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom: 5,
  },
  // marginTop: {
  //   marginTop: 2,
  // },
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
    //textAlign: 'center',
  },
});
//i adeed this 
  // logoutbtn:{
  //   flex: 1,
  //   paddingTop: 40,
  //    paddingRight: 20,
  //   alignItems: 'flex-end', // Right side
  //    backgroundColor: '#fff',
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
{/* <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
        
      }> */}
 
 {/* <LogoutIcon/> */}
      {/* <ThemedView style={styles.headerContainer}> */}
      
        {/* <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView> */}
        {/* Logout Icon positioned at top right */}
    {/* <ThemedView style={{
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 10
    }}> */}
      {/* <LogoutIcon />
       */}
    {/* </ThemedView> */}