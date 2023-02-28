import React from 'react';
import { View , Image , Text, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


function VendorCard(props)
{

    const navigation = useNavigation();

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate("menu" , params  = {type : props.type})}}>
            <View style = {{marginTop : '10%' }}>
                <Text style = {{alignSelf : 'center' , fontSize  :'20' , fontWeight : '700' , marginBottom : '5%'}}>{props.name}</Text>
                <Image style = {{width : '65%' ,height : '80%' , resizeMode : 'stretch' , borderRadius : '20%' , alignSelf : 'center'}} source = {require('./assets/beaf.jpg')} />
            </View>
        </TouchableWithoutFeedback>

        </>
    );
}

export default VendorCard;