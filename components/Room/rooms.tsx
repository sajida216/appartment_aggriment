import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';

const DATA = [
  { id: '1', title: 'A1', status: 'Pending' },
  { id: '2', title: 'A2', status: 'Completed' },
  { id: '3', title: 'A3', status: 'In Progress' },
];

const Item = ({ title, status }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.status}>{status}</Text>
  </View>
);

export default function Rooms() {
  return (
    <View>
      <Button />
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} status={item.status} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    padding:30,
    left:30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 19,
    marginVertical: 10,
    borderRadius: 8,
    width:360,
    height:160,
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




