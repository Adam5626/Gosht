import React from 'react';
import { View , Image , Text, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

function MenuCard(props)
{

    const navigation = useNavigation();

    return(
        <>
        <View style = {{marginTop : '20%' , flexDirection : 'row'}}>
            <TouchableWithoutFeedback onPress = {()=>{navigation.navigate("details" , params = {cut : props.name , price : props.price})}}>
                <Image style = {{width : '40%' ,height : '100%' , resizeMode : 'stretch' , borderRadius : '20%'}} source = {require('./assets/beaf.jpg')} />
            </TouchableWithoutFeedback>


            <View style = {{marginLeft : '10%'}}>
                <Text style = {{fontSize : '15' , fontWeight : '500'}}>{props.name}</Text>
                <Text style = {{fontSize : '15' , fontWeight : '700' , marginTop : '10%'}}>{props.price}<Text style = {{ fontSize : '13' , fontWeight : '400'}}>Rs/piece</Text></Text>
                <View style = {{width : '100%' , flexDirection : 'row' , marginTop : '20%'}}>
                     <Avatar
                    size={30}
                    overlayContainerStyle={{ backgroundColor: "black" }}
                    icon={{ name: "heart", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                    <Avatar/>

                    <Avatar
                    size={30}
                    overlayContainerStyle={{ backgroundColor: "#28CC9E" }}
                    icon={{ name: "check", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                    <Avatar/>
                </View>

            </View>
        </View>
        </>
    );
}

export default MenuCard;