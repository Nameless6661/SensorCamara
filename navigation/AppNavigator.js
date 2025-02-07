import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Login" >
            <Stack.Screen name = "Login" component={LoginScreen}/>
            <Stack.Screen name = "Menu" component={MenuScreen}/>
        
        </Stack.Navigator>
    )
};

export default AppNavigator;