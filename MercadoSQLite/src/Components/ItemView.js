import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

export default function ItemView(props) {
        return(
            <View style={{margin: 10, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: 'grey'}}>
                <Text>ID: {props.id}</Text>
                <Text>Nome: {props.nome} ({props.quantidade} unidades)</Text>
                <Text>Descrição: {props.descricao}</Text>
                <Text>Valor: {props.valor}</Text>
                <Text style={getEstilo()}>Status: {props.status}</Text>
                <Text></Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'green', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => props.comprado(props.id)}>
                        <Text style={{color: 'white'}}><FontAwesome5 name="check" /> Comprado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'red', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => props.deletar(props.id)}>
                        <Text style={{color: 'white'}}><FontAwesome5 name="trash" /> Remover</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    
    getEstilo = () => {
    /*    if(props.status == "A comprar") {
            return {color: 'blue'}
        } else if (props.status == "Comprado") {
    */        return {color: 'green'}
    //    }
    }
