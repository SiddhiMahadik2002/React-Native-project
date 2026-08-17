import React, { useState } from 'react';
import { View ,Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from './RegisterScreen.styles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen =()=>{

    const navigation =useNavigation();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    
    const handleRegister= async ()=>{
         if(!name || !email ||!password ||!confirmPassword)
{
    Alert.alert("Error","Please fill all fields");
    return;
}  
if(password.length<6){
    Alert.alert("Error","Password must be at aleast 6 characters long");
    return;
}
if(password !== confirmPassword){
    Alert.alert("Error","Passwords does not match");
    return;
}

const user={
    name :name,
    email :email,
    password:password
}
await AsyncStorage.setItem('user',JSON.stringify(user));

Alert.alert("Success", "User registered successfully")

}


    return(
        <View style={styles.container}>
           <Text style={styles.title}>Create an account</Text>

           <Text style={styles.label}>Name</Text>
           <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />

           <Text style={styles.label}>Email</Text>
           <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize='none' placeholder="Enter you email"/>

           <Text style={styles.label}>Password</Text>
           <TextInput style={styles.input} value={password} onChangeText={setPassword}  placeholder="Enter your password" secureTextEntry/>

           <Text style={styles.label}>Confirm Password</Text>
           <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm your password" secureTextEntry/>

           <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
           </TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Login')}>
               <Text style={styles.loginText}>Already have an account? Login</Text>

</TouchableOpacity>
        </View>
            
        
    )
}
export default RegisterScreen;