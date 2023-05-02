import React, { Component } from 'react';

// Importação das telas
import Cadastro from './src/Pages/Cadastro';
import Listagem from './src/Pages/Listagem';

// Configuração da navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Importação de ícones
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Produto from './src/Pages/Produto';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Listagem'
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Listagem"
            component={Listagem}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="th-list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="save" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Produto"
            component={Produto}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="save" color={color} size={size} />
              ),
            }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}