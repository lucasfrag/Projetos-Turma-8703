import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Tela Home
      </Text>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate("Produto Y")} >
          <Text>Produto 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Produto Y")} >
          <Text>Produto 2</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button 
        title="Ir para próxima tela" 
        onPress={() => navigation.navigate("Produtos")} 
      />
    </View>
  )
}