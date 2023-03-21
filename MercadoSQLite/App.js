import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import ItemDatabase from './src/Database/ItemDatabase';
import Item from './src/Models/Item';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Item 1", 
      descricao: "Item 1", 
      valor: 1.11, 
      quantidade: 1, 
      status: "A comprar",
      lista: []
    }
    this.Listar();
  }

  Listar = () => {
    const db = new ItemDatabase();
    db.Listar().then(
      data => {
        this.setState({ lista: data })
      }
    )
  }

  Cadastrar = (nome, descricao, valor, quantidade, status) => {
    const db = new ItemDatabase();
    const novoItem = new Item(nome, descricao, valor, quantidade, status);
    db.Cadastrar(novoItem);
  }

  render() {
    return (
      <View>
        <Text>Olá!</Text>
        <Button title="Cadastrar" 
          onPress={() => this.Cadastrar(
            this.state.nome, 
            this.state.descricao, 
            this.state.valor, 
            this.state.quantidade, 
            this.state.status)
          } 
        />

        
        {
          this.state.lista.map(
            item => (<Text>{item.id}, {item.nome}, {item.quantidade}, {item.valor}, {item.status}</Text>)
          )
        }
        
      </View>
    )
  }
}