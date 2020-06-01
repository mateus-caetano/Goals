import React from 'react';

import Category from './src/screens/category';
import Menu from './src/screens/menu';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function App() {

  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Category" component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  //return <Category />;
}
