import React from "react";
import { Image , View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
function ItemDetails()
{

    const route = useRoute();
    const cut  = route.params.cut;
    const price = route.params.price;
    return(
        <>
            <Image style = {{width : '100%' , height : '40%' }} source = {require("./assets/chicken.jpg")}/>
            <View style = {{height : '100%' , padding : '10%'  , borderRadius : '30%' , position : 'absolute' , top : '35%' , backgroundColor : 'white'}}>
                <Text style = {{fontSize : '30' , fontWeight : '700'}}>{cut}</Text>
                <Text style = {{fontSize : '20' , fontWeight : '600' , marginTop : '8%'}}>{price} <Text style = {{fontSize : '15' , fontWeight : '500'}}>Rs/piece</Text></Text>
                <Text style = {{fontSize : '15' , fontWeight : '600' , marginTop : '2%' , color : '#28CC9E'}}>~ {price} / piece</Text>
                <Text style = {{fontSize : '20' , fontWeight : '600' , marginTop : '10%'}}>Buy our fresh {cut}</Text>
                <Text style = {{textAlign:'justify', fontSize : '15' , fontWeight : '600' , marginTop : '5%' , color : '#3A4750'}}>lorem ipsum lorem ipsum lorem impus impus can do at all lorem lorem is a requt paores of ipsum lorem ipsum lorem ipsum lorem impus impus can do at all lorem lorem is a requt paores of ipsum</Text>
                <View style = {{flexDirection :'row' , justifyContent : 'space-between' , width : '40%' ,marginTop : '20%'}}>
                <Avatar
                    size={40}
                    overlayContainerStyle={{ backgroundColor: "black" }}
                    icon={{ name: "heart", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />

                <Avatar
                    size={40}
                    overlayContainerStyle={{ backgroundColor: "#28CC9E" }}
                    icon={{ name: "check", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                </View>
            </View>
        </>
    )
}

export default ItemDetails;