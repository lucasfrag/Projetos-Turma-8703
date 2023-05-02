import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Home from '../Pages/Home';
import Produtos from '../Pages/Produtos';
import Produto1 from '../Pages/Produtos/Produto1';
import Produto2 from '../Pages/Produtos/Produto2';

export default class DrawerNavigator extends Component {
  render() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Produtos" component={Produtos} />
        </Drawer.Navigator>
    )
  }
}