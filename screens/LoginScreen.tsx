import React, { useState } from 'react';
import {View, Text, TextInput,TouchableOpacity, Alert} from 'react-native';
import {styles} from './RegisterScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen =()=>{
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
    const handleLogin =async()=>{

       if(!email || !password){
        Alert.alert("Error","Please fill in all fields");
        return;
       }

       const userData =await AsyncStorage.getItem('user');

       if(!userData){
        Alert.alert("Error","No user found, please register first");
        return;
       }

       const user=JSON.parse(userData);

       if(user.email !== email || user.password !== password){
        Alert.alert("Error","Invalid email or password");
        return;
       }
    }
    return(
        <View style={styles.container}>
          <Text  style={styles.title}>Welcome to the Login Screen</Text> 
        
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail}/>
        <Text  style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" value={password}
        onChangeText={setPassword}
         secureTextEntry/>
        <TouchableOpacity   style={styles.button} onPress={handleLogin}> <Text style={styles.buttonText}>Login</Text> </TouchableOpacity>
        </View>

    )
}
export default LoginScreen;