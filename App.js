import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback  } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Vendors from './Vendors';
import Menu from './Menu';
import ItemDetails from './ItemDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="vendors" component={Vendors} options={{ headerShown: false }} />
        <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="details" component={ItemDetails} options={{ headerShown: false }} />
      </Stack.Navigator>



    </NavigationContainer>


    </>
  );
}


