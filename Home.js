import React from "react";
import { Text , View , TextInput, ScrollView } from "react-native";
import { Avatar } from '@rneui/themed';
import Footer from "./Footer";

import ItemCard from "./ItemCard";
const chicken = require('./assets/chicken.jpg');
const beaf = require('./assets/beaf.jpg');
const mutton = require('./assets/mutton.jpg');
const fish = require('./assets/fish.jpg');
const seafood = require('./assets/seafood.jpg');
const vegan = require('./assets/vegan.jpg');


function Home()
{
    return (
        <>
        <View style = {{height : '100%' , backgroundColor : '#f1eff1'}}>
        <Text style = {{marginTop : '30%' , marginLeft : '10%' , fontSize : '25' , fontWeight : '700'}}>Categories</Text>
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

        
        <ScrollView contentContainerStyle = {{ flexDirection :'row' , flexWrap : 'wrap' , height : '100%' , justifyContent : 'space-around'}}>
            <ItemCard img = {chicken} name = "Chicken" />
            <ItemCard img = {beaf} name = "Beaf" />
            <ItemCard img = {mutton} name = "Mutton" />
            <ItemCard img = {fish} name = "Fish" />
            <ItemCard img = {seafood} name = "Seafood" />
            <ItemCard img = {vegan} name = "Vegan Meat" />
        </ScrollView>




        </View>
        <Footer/>
        </>
    )
}

export default Home;