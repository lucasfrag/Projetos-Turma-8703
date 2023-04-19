import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/Navigators/TabNavigator'
import DrawerNavigator from './src/Navigators/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}