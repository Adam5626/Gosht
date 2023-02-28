import React from 'react';
import { Text , View , TextInput, ScrollView } from "react-native";
import { Avatar } from '@rneui/themed';

import { useRoute } from '@react-navigation/native';

import MenuCard from './MenuCard';


const beef = [
    {item : "Front-Chop" , price : '800'},
    {item : "Bonless Cubes" , price : '1600'},
    {item : "Mince Beef" , price : '1200'},
    {item : "Steak" , price : '850'},
    {item : "Beef Tail" , price : '2000'}

]

const chicken = [
    {item : "Wings" , price : '800'},
    {item : "Leg Piece" , price : '1600'},
    {item : "Karahi Cut" , price : '1200'},
    {item : "Breast" , price : '850'},
    {item : "Qorma Cut" , price : '2000'}

]


function Menu()
{





    const route = useRoute();
    var meatType = [];

    const type = route.params.type;

    if(type === "Chicken")
    {
        meatType = chicken;
    }

    else if(type === "Beef")
    {
        meatType = beef;
    }
    else{
        meatType = beef;
    }


    return (
        <>
                <View style = {{height : '100%' , backgroundColor : '#f1eff1'}}>
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

                    <ScrollView contentContainerStyle = {{justifyContent : 'center', alignItems : 'center'}}>

                    {

                        meatType.map((n,i)=>{
                            return(<MenuCard name = {n['item']} price = {n['price']}/>)
                        })
                    }

                    </ScrollView>



                </View>
        </>
    );

}


export default Menu;