import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback , Image  } from 'react-native';

import { useNavigation } from '@react-navigation/native';


function Login()
{

    const navigation = useNavigation();
    return (
        <>
    <StatusBar/>



      <View style = {{backgroundColor : 'white' , height : '100%'}}>
      <Image style = {{alignSelf : 'center' , marginTop : '20%'}} source={require("./assets/gosht.png")}/>
      <Text style = {{marginTop : '5%' , alignSelf : 'center' , color : 'black' , fontSize : '30' , fontWeight : '600'}}>Login</Text>
      <Text style = {{alignSelf : 'center' , color : 'black' , marginTop : '10%' , fontSize : '20'}}>Username</Text>
      <TextInput style = {{alignSelf : 'center' , borderWidth : '1%' , padding : '3%' , borderColor : 'black' , width : '70%' , marginTop : '5%' , borderRadius : '10%'}} placeholderTextColor = {'#620808'} placeholder='john123'/>

      <Text style = {{alignSelf : 'center' , color : 'black' , marginTop : '5%' , fontSize : '20'}}>Password</Text>
      <TextInput style = {{alignSelf : 'center' , borderWidth : '1%' , padding : '3%' , borderColor : 'black' , width : '70%' , marginTop : '5%' , borderRadius : '10%'}} placeholderTextColor = {'#620808'} placeholder='john123'/>

      <TouchableWithoutFeedback onPress={()=>{navigation.navigate("home")}}>
        <View style = {{alignSelf : 'center' , marginTop : '10%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderColor : '#620808' , borderRadius : '15%', backgroundColor: '#620808'}}>
          <Text style = {{alignSelf : 'center', color:'white'}}>Login</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=>{navigation.navigate("signup")}}>
        <View style = {{alignSelf : 'center' , marginTop : '5%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderColor : '#620808' , borderRadius : '15%', backgroundColor: '#620808'}}>
          <Text style = {{alignSelf : 'center', color:'white'}}>Create New Account</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
        </>
    );
}

export default Login;