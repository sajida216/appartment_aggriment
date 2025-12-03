import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LogoutIcon() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme(); // Detects 'light' or 'dark'

  const textColor = colorScheme === 'dark' ? 'white' : 'black';
 // 👇 Logout function with pop-up confirmation
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            console.log('User logged out');
            navigation.navigate('Login'); // navigate to Login page after logout
          },
          style: 'destructive', // makes the button red on iOS
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.link, { color: textColor }]}>Login</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={handleLogout}>
        <Text style={[styles.link, { color: textColor }]}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={[styles.link, { color: textColor }]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',      // places links in a row
    justifyContent: 'space-around',
    padding: 20,
  },
  link: {
     fontSize: 18,
  fontWeight: 'bold',
  textDecorationLine: 'none',
  paddingVertical: 8,
  paddingHorizontal: 12,
  },
});



// import { ThemedText } from '@/components/ThemedText';
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Menu, Provider } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native';
// import { router } from 'expo-router';
// import { useRouter, useLocalSearchParams } from 'expo-router';
// import { ThemedView } from '@/components/ThemedView';

// export default function LogoutIcon() {
//   const router = useRouter();

//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   const handleLogout = () => {
//     closeMenu();
  
//       router.push('/Logoutpage');
    
//     console.log('Logged out'); // Replace with your logout logic
//   };

//   return (
//     <ThemedView>
//      <Menu.Item onPress={handleLogin} title="Login" />
//         <Menu.Item onPress={handleLogout} title="Logout" />
//         <Menu.Item onPress={handleSettings} title="Settings" />
//       </Menu>
//       </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   paddingTop: 40,
//   //   paddingRight: 20,
//   //   alignItems: 'flex-end', // Right side
//   //   // backgroundColor: '#fff',
//   //   // backgroundColor: '#4CAF50',
//   // },
//   menuButton: {
//     backgroundColor: '#4CAF50',
//       borderRadius: 50,
//       padding: 20,
//   },
// });
// <Provider>
    //   <View >
    //     <Menu
    //       visible={visible}
    //       onDismiss={closeMenu}
    //       anchor={
    //         <TouchableOpacity onPress={openMenu} style={styles.menuButton} >
    //           ☰
    //         </TouchableOpacity>
    //       }>
    //       <Menu.Item onPress={handleLogout} title="Log Out" />
    //     </Menu>
    //   </View>
    // </Provider>
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