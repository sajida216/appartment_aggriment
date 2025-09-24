import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useRouter} from 'expo-router';
export default function RoomDetailsScreen() {

  const navigation = useNavigation(); // To go back
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Header  onPress={() => navigation.navigate('apartment-detail')}*/}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Room 1  Andrew</Text>
      </View>

      {/* Removed Member */}
      <View style={styles.removedMember}>
        <Text style={styles.removedText}>Removed Jhon</Text>
      </View>

      {/* Added Member */}
      <View style={styles.addedMember}>
        <View>
          <Text style={styles.addedText}>Added Andrew</Text>
          <Text style={styles.metaText}>Joined 12-Jan-2024     Deposited ₹12,000</Text>
        </View>
        <Entypo name="menu" size={24} color="black" />
      </View>

      {/* Transactions */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.amount}>₹12,000</Text>
          <Text style={styles.metaText}>Deposite</Text>
        </View>
        <Text>Notes Added Appears Here</Text>
        <Text style={styles.timeText}>22-Jan-2024 08:12 am</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.amount}>₹ 3500</Text>
          <Text style={styles.metaText}>Jan - 2024</Text>
        </View>
        <Text>Notes Added Appears Here</Text>
        <Text style={styles.timeText}>22-Jan-2024 08:12 am</Text>
      </View>

      {/* Bottom Buttons */}
       {/* onPress={() => navigation.navigate('/Rooms/add-payment')} */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.removeBtn}>
          <Text style={styles.buttonText}>Remove Andrew</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logBtn}  onPress={() => router.push("/Rooms/add-payment")}>
          <Text style={styles.buttonText}>Log Payment</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    minHeight: '100%', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 10,
  },
  removedMember: {
    backgroundColor: '#f4c2c2',
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  addedMember: {
    backgroundColor: '#a8d5a2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  addedText: {
    fontWeight: 'bold',
  },
  metaText: {
    fontSize: 12,
    color: '#444',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeText: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  removeBtn: {
    flex: 1,
    backgroundColor: '#f28b82',
    padding: 10,
    marginRight: 5,
    alignItems: 'center',
    top:350,
  },
  logBtn: {
    flex: 1,
    backgroundColor: '#81c784',
    padding: 10,
    marginLeft: 5,
    alignItems: 'center',
    top:350,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
