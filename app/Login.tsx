import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    // Here you can add your login logic or API call
  };

  const handleClick = () => {
    // navigation.navigate('index');
    router.push('/'); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email or Phone No"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => {handleLogin(); handleClick();}}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('createaccount')}>
        <Text style={styles.link}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});


// import { router } from 'expo-router';
// import { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// export default function LoginScreen() {
//   const [phoneOrEmail, setPhoneOrEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1); // 1 = input phone/email, 2 = input OTP

//   const handleSendOTP = () => {
//     if (!phoneOrEmail) {
//       alert('Please enter your phone number or email');
//       return;
//     }
//     // 👇 Here you'd call your backend to send OTP
//     console.log('Sending OTP to:', phoneOrEmail);
//     setStep(2); // Move to OTP entry step
//   };

//   const handleVerifyOTP = () => {
//     if (otp === '123456') {
//       // 👇 Normally you'd verify with backend
//       console.log('OTP verified!');
//       router.replace('/'); // Redirect to home
//     } else {
//       alert('Invalid OTP');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       {step === 1 ? (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number or Email"
//             value={phoneOrEmail}
//             onChangeText={setPhoneOrEmail}
//             keyboardType="email-address"
//           />
//           <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             value={otp}
//             onChangeText={setOtp}
//             keyboardType="numeric"
//           />
//           <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
//             <Text style={styles.buttonText}>Verify & Login</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 25,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginBottom: 30,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 14,
//     marginBottom: 20,
//     borderRadius: 8,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

