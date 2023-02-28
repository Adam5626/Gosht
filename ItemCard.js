import React from "react";

import {View , Text , Image, TouchableWithoutFeedback} from 'react-native';

import { useNavigation } from "@react-navigation/native";

function ItemCard(props)
{

    const navigation = useNavigation();

    return (
        <>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("vendors" , params = {name : props.name})}}>
                <View style = {{  marginTop : '10%' , borderWidth : '1%'  ,width : '40%' , height : '35%' , borderRadius : '10%'}} >
                    <Image style = {{width : '100%' , height : '65%' , borderTopLeftRadius : '10%' , borderTopRightRadius : '10%' }} source = {props.img}/>
                    <Text style = {{fontWeight : '700' , marginTop : '5%' , marginLeft : '8%'}}>{props.name}</Text>
                    <Text style = {{marginTop : '5%' , marginLeft : '8%'}}>(21)</Text>
                </View>
            </TouchableWithoutFeedback>

        </>
    )
}

export default ItemCard;