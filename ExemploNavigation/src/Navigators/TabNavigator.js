import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import Produtos from '../Pages/Produtos';
import StackNavigator from './StackNavigator';

export default class TabNavigator extends Component {
  render() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Stack" component={StackNavigator} />
          <Tab.Screen name="Produtos" component={Produtos} />
        </Tab.Navigator>
    )
  }
}