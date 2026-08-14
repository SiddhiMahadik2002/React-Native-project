import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center'

    },
    title:{
        fontSize:28,
        textAlign:'center',
        marginBottom:30,
        fontWeight:'bold'
    },
    label:{
        fontSize:16,
        marginBottom:5,
        paddingLeft:5
    }
    ,
    input:{
        borderWidth:1,
        borderColor:'ccc',
          borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    }
,
    button:{
        backgroundColor:'#007AFF',
        padding:12,
        borderRadius:8,
        alignItems:'center',
        marginTop:15
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
    ,
    loginText:{
      textAlign:'center',
      marginTop:20

    }
})