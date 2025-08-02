// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native';
// export default function Chatbox() {
//   const [text, setText] = useState('');

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.label}>Enter your name:</Text> */}

//        <Text style={styles.output}>You typed: {text}</Text>
//       {/* Text Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Type here..."
//         value={text}
//         onChangeText={setText}
//       />
//       <View>
//      <TouchableOpacity style={styles.btn}>
//         ADD
//       </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     top:690,
//     right:9,
//     width:360,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     height: 50,
//     borderColor: '#999',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   output: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 20,
//   },
//   btn: {
//     backgroundColor: '#007AFF',
//     width:50,
//     borderRadius: 10,
//     elevation: 5,
//     padding:10,
//     flex:1,
//     left:330,
//     top:0,
//   }
// });

