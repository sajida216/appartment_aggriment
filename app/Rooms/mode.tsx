// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useTheme } from './ThemeView';

// export default function SettingsScreen() {
//   const { themeMode, setThemeMode, colors } = useTheme();

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <Text style={[styles.label, { color: colors.text }]}>Select Theme</Text>

//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={themeMode}
//           onValueChange={(value) => setThemeMode(value)}
//           style={[styles.picker, { color: colors.text }]}
//           dropdownIconColor={colors.text}
//         >
//           <Picker.Item label="System Default" value="system" />
//           <Picker.Item label="Light" value="light" />
//           <Picker.Item label="Dark" value="dark" />
//         </Picker>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
// });

