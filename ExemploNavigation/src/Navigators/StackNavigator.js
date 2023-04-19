import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from '../Pages/Home';
import Produto1 from '../Pages/Produtos/Produto1';
import Produto2 from '../Pages/Produtos/Produto2';

export default class StackNavigator extends Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Produto X" component={Produto1} />
          <Stack.Screen name="Produto Y" component={Produto2} />
        </Stack.Navigator>
    )
  }
}