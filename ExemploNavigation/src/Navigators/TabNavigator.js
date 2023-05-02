import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import Produtos from '../Pages/Produtos';
import StackNavigator from './StackNavigator';

export default class TabNavigator extends Component {
  render() {
    return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" component={StackNavigator} 
            options={{headerShown: false}}  
          />
          <Tab.Screen name="Produtos" component={Produtos} />
        </Tab.Navigator>
    )
  }
}