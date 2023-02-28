import React from 'react';
import { Text , View , TextInput, ScrollView } from "react-native";
import { Avatar } from '@rneui/themed';

import MenuCard from './MenuCard';
import VendorCard from './VendorCard';
import ItemCard from './ItemCard';
import { useRoute } from '@react-navigation/native';

const vendors = ["Zenith" , "K&Ns" , "Fauji Fresh" , "Meat One"];


function Vendors()
{

    const route = useRoute();
    const type = route.params.name;
    console.log("meat : " , type);
    return (
        <>

                <Text style = {{marginTop : '30%' , marginLeft : '10%' , fontSize : '25' , fontWeight : '700'}}>Vendors</Text>
                <View style = {{marginTop : '10%', alignSelf : 'center' , borderWidth : '1%' , padding : '3%' , width : '80%' , borderRadius : '30%' , flexDirection : 'row'}}>
                    <Avatar
                    size={30}
                    overlayContainerStyle={{ backgroundColor: "black" }}
                    rounded
                    icon={{ name: "search", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                    <TextInput style = {{marginLeft : '10%'}} placeholder="Search"/>
                </View>

                <ScrollView contentContainerStyle = {{height : '60%'}}>

                        {
                            vendors.map((n,i)=>{
                                return(<VendorCard name = {n} type = {type}/>)
                            })
                        }

                </ScrollView>


        </>
    );
}

export default Vendors;