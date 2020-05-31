import React from 'react';

import Category from './src/screens/Categorys/category';
import InicioCategory from './src/screens/Categorys/inicioCategory';
import EspecificarCategory from './src/screens/Categorys/especificarCategory';
import Menu from './src/screens/menu';
import Metas from './src/screens/Metas/metas'
import DetalharMetas from './src/screens/Metas/detalharMetas'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function App() {

  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Menu" component={Menu} headerMode="none" />
        <Stack.Screen name="InicioCategory" component={InicioCategory} />
        <Stack.Screen name="Category" component={Category}/>
        <Stack.Screen name="EspecificarCategory" component={EspecificarCategory}/>
        <Stack.Screen name="Metas" component={Metas}/>
        <Stack.Screen name="DetalharMetas" component={DetalharMetas}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  //return <Category />;
}
