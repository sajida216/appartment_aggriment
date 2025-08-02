import React from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import Button from '../../components/Button';

const DATA = [
  { id: '1', title: 'The skyland' },
  { id: '2', title: 'Arafa' },
  { id: '3', title: 'The habitate'},
  { id: '4', title: 'green Land'},
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    
  </View>
);

export default function List({ navigation }) {
  return (
    <View>
     <Button title="Rooms" onPress={() => navigation.navigate('Rooms')} />
      <View style={styles.container}>
    <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title}  />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    </View>
    </View>
  );
}
//title="Go to About"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    // backgroundColor:'#2aa',
    padding: 10,
    left:30,
    top:80,
    
    marginBottom:10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    width: 360,
    height: 160,
  },
  title: {
    fontSize: 23,
    color: '#000',
  },
  status: {
    fontSize: 18,
    color: '#555',
  },
 });

