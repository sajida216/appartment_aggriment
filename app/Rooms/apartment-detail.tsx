import { Card } from '@/components/Card';
import { PaymentProgress } from '@/components/PaymentProgress';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View ,Text,} from 'react-native';
import Addrooms from '@/app/Rooms/add-roomsbtn'; // fixed import
import { AntDesign, Entypo } from '@expo/vector-icons';
//import { useNavigation } from '@react-navigation/native';
// import Paymenthistory from '@/app/Rooms/payment-history';
export default function ApartmentDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const apartmentName = params.name as string || 'SkyLine Apartments';


  // const handleRoomManagement = () => {
  //   router.push({
  //     pathname: '/room-management',
  //     params: { apartmentName }
  //   });
  // };

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

  // const handleCardPress = (apartment: Apartment) => {
  //   router.push(`/payment-history?name=${apartment.name}`);
  // };
  const handleCardPress = () => {
    router.push(`/Rooms/payment-history`);
  };

  // const handleGoback = () => {
  //   router.push(`/index`);
  // };

  // const navigation = useNavigation(); // To go back

  return (
    <ScrollView style={styles.container}>
      {/* <ThemedView style={styles.header}>
        <ThemedView style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.back()}>  {/*onPress={() => navigation.popToTop()}  this is back arrow from all room to home page */}
            {/* <ThemedText><AntDesign name="arrow-left" size={20} /></ThemedText>
          </TouchableOpacity>
          <ThemedText type="title">{apartmentName}</ThemedText> */}
          {/* <TouchableOpacity style={styles.manageButton} onPress={handleRoomManagement}>
            <ThemedText style={styles.manageButtonText}>Manage Rooms</ThemedText>
          </TouchableOpacity> */}
        {/* </ThemedView>
      </ThemedView>  */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      
        <Text style={styles.headerTitle}>{apartmentName}</Text>
      </View>

      <Card onPress={handleCardPress}>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 1</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Andrew</ThemedText>
          <ThemedText> ₹ 3500 </ThemedText>
        </ThemedView>
        <PaymentProgress year='2036' payments={room1Payments} tenantName="Andrew" roomNumber="Room 1" />
      </Card>

      <Card onPress={handleCardPress}>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 2</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">John</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room2Payments} tenantName="John" roomNumber="Room 2" />
      </Card>

      <Card onPress={handleCardPress}>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 3</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Sarah</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room3Payments} tenantName="Sarah" roomNumber="Room 3" />
      </Card>

      <Card onPress={handleCardPress}>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Room 4</ThemedText>
          <ThemedText>Since 12-Aug-2013</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Mike</ThemedText>
          <ThemedText> ₹ 3500</ThemedText>
        </ThemedView>
        <PaymentProgress year="2023" payments={room4Payments} tenantName="Mike" roomNumber="Room 4" />
      </Card>
      <Addrooms/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#222',
  //textAlign: 'center',
  flex: 1, 
},
  container: {
    flex: 1,
  },
  header: {  
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 40,       // gives space from top (like most mobile apps)
  marginBottom: 20,
  justifyContent: 'space-between',    // some space below the header
},
backButton: {
  marginRight: 10,     // space between arrow and title
  padding: 6,          // slightly larger touch area
},
    // padding: 20,
    // gap: 8,
 
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  manageButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  manageButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
}); 