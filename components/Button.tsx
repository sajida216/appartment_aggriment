import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    top: 20,
    right: 40,
    backgroundColor: '#0b0c0dff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
