import React from "react";
import { View , Image } from "react-native";


function Footer()
{
    return(
        <>
        <View style = {{width : '100%' , backgroundColor : 'white' , flexDirection : 'row' }}>
            <Image style = {{width : '8%' , height : '18%' , resizeMode : 'stretch'}} source = {require('./assets/menu.png')} />
            <Image style = {{width : '8%' , height : '18%'  , resizeMode : 'stretch'}} source = {require('./assets/cart.png')} />
            <Image style = {{width : '8%' , height : '18%' , resizeMode : 'stretch'}} source = {require('./assets/user.png')} />
        </View>
        </>
    )
    
}

export default Footer;