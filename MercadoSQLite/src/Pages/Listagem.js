import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';

import ItemDatabase from '../Database/ItemDatabase';
import ItemView from '../Components/ItemView';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*lista: [
                { id: 1, nome: "Teste", valor: "R$ 3.00", quantidade: 5, status: "A comprar", tela: 'Produto' },
                { id: 2, nome: "Teste 2", valor: "R$ 3.00", quantidade: 5, status: "A comprar", tela: 'Produto' }
            ]*/
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

    Atualizar = (id) => {
        const db = new ItemDatabase();
        db.Atualizar(id);
        this.Listar();
    }

    Remover = (id) => {
        const db = new ItemDatabase();
        db.Remover(id);
        this.Listar();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.Listar}>
                    <Text><Ionicons name="refresh" size={30} color="black" /> Atualizar</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.lista}
                    renderItem={( {item} ) => (
                        <ItemView
                            id={item.id}
                            nome={item.nome}
                            valor={item.valor}
                            quantidade={item.quantidade}
                            status={item.status}                            

                            comprado={this.Atualizar}
                            deletar={this.Remover}
                        />
                    )
                    }

                    initialNumToRender={10}
                />
                {/*
                        this.state.lista.map(
                            item => (
                                <ItemView
                                    id={item.id}
                                    nome={item.nome}
                                    valor={item.valor}
                                    quantidade={item.quantidade}
                                    status={item.status}
                                    
                                    tela={item.tela}

                                    comprado={this.Atualizar}
                                    deletar={this.Remover}
                                />
                            )
                        )
                            */}

            </View>
        )
    }
}