import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';

import ItemDatabase from '../Database/ItemDatabase';
import Item from '../Models/Item';

import { useNavigation } from '@react-navigation/native';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "Não especificado",
            descricao: "",
            valor: 0,
            quantidade: 0,
            status: "A comprar"
        }
    }

    Cadastrar = (nome, descricao, valor, quantidade, status) => {
        const db = new ItemDatabase();
        const novoItem = new Item(nome, descricao, valor, quantidade, status);
        db.Cadastrar(novoItem);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <TextInput onChangeText={(textoDigitado) => this.setState({ nome: textoDigitado })} placeholder="Nome" />
                    <TextInput onChangeText={(textoDigitado) => this.setState({ descricao: textoDigitado })} placeholder="Descrição" />
                    <TextInput onChangeText={(textoDigitado) => this.setState({ valor: textoDigitado })} placeholder="Valor" />
                    <TextInput onChangeText={(textoDigitado) => this.setState({ quantidade: textoDigitado })} placeholder="Quantidade" />

                    <Button title="Cadastrar"
                        onPress={() => this.Cadastrar(
                            this.state.nome,
                            this.state.descricao,
                            this.state.valor,
                            this.state.quantidade,
                            this.state.status)
                        }
                    />
                </View>
            </View>
        )
    }
}