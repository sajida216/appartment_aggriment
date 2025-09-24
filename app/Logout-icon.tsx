import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function LogoutIcon() {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleLogout = () => {
    closeMenu();
  
      router.push('/Logoutpage');
    
    console.log('Logged out'); // Replace with your logout logic
  };

  return (
    <Provider>
      <View >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu} style={styles.menuButton} >
              ☰
            </TouchableOpacity>
          }>
          <Menu.Item onPress={handleLogout} title="Log Out" />
        </Menu>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 40,
  //   paddingRight: 20,
  //   alignItems: 'flex-end', // Right side
  //   // backgroundColor: '#fff',
  //   // backgroundColor: '#4CAF50',
  // },
  menuButton: {
    backgroundColor: '#4CAF50',
      borderRadius: 50,
      padding: 20,
  },
});

// import { Text, StyleSheet } from 'react-native';
// import { ThemedView } from '@/components/ThemedView';

// export default function Logoutpage() {
//     return (
//         <ThemedView style={styles.container}>
//             <Text style={styles.heading}>LOGOUT</Text>
//             <Text>SETTINGS</Text>
//         </ThemedView>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10
//   }
// });