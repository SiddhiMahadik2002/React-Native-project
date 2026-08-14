import React from 'react';
import { View ,Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './RegisterScreen.styles';



const RegisterScreen =()=>{
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Create an account</Text>

           <Text style={styles.label}>Name</Text>
           <TextInput style={styles.input} placeholder="Enter your name" />

           <Text style={styles.label}>Email</Text>
           <TextInput style={styles.input} placeholder="Enter you email"/>

           <Text style={styles.label}>Password</Text>
           <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry/>

           <Text style={styles.label}>Confirm Password</Text>
           <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry/>

           <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
           </TouchableOpacity>

           <Text style={styles.loginText}>Already have an account? Login</Text>
        </View>
            
        
    )
}
export default RegisterScreen;