import React from 'react';
import { Text , View, TextInput , TouchableWithoutFeedback , Image } from 'react-native';


function SignUp()
{


    return (
        <>
        <View style = {{height : '100%' , backgroundColor : 'white'}}>
            <Image style = {{alignSelf : 'center' , marginTop : '25%'}} source={require("./assets/gosht.png")}/>
            <Text style = {{marginTop : '10%' , alignSelf : 'center', color:'black' , fontSize : '20'}}>Username</Text>
            <TextInput placeholderTextColor = {'#620808'} style = {{alignSelf : 'center' , marginTop : '5%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderRadius : '10%' , borderColor : 'black'}} placeholder = "John123"/>
            <Text style = {{marginTop : '5%' , alignSelf : 'center', color:'black' , fontSize : '20'}}>Email</Text>
            <TextInput placeholderTextColor = {'#620808'} style = {{alignSelf : 'center' , marginTop : '5%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderRadius : '10%' , borderColor : 'black'}} placeholder='john123@abc.com'/>
            <Text style = {{marginTop : '5%' , alignSelf : 'center', color:'black' , fontSize : '20'}}>Phone Number</Text>
            <TextInput placeholderTextColor = {'#620808'} style = {{alignSelf : 'center' , marginTop : '5%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderRadius : '10%' , borderColor : 'black'}} placeholder='+32-47982739'/>
            <Text style = {{marginTop : '5%' , alignSelf : 'center', color:'black' , fontSize : '20'}}>Password</Text>
            <TextInput placeholderTextColor = {'#620808'} style = {{alignSelf : 'center' , marginTop : '5%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderRadius : '10%' , borderColor : 'black'}} placeholder='********'/>


            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("signup")}}>
                <View style = {{alignSelf : 'center' , marginTop : '8%' , borderWidth : '1%' , padding : '3%' , width : '60%' , borderColor : '#620808' , borderRadius : '15%', backgroundColor: '#620808'}}>
                <Text style = {{alignSelf : 'center', color:'white'}}>Register</Text>
                </View>
            </TouchableWithoutFeedback>
            
        </View>
        </>
    );
}

export default SignUp;