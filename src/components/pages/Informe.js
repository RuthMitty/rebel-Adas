import React from "react";
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import Step from "./Step";
import estilos from "../../../constants/estilos";
import instrucciones from "../../../constants/instrucciones";


export default function Informe(){
    return(
        <View style={styles.contenedor}>
            <View style={styles.cont}>
                <Text style={estilos.title}>Informe</Text>
                <TextInput 
                    placeholder="Nombre del incidente"
                    style={styles.input}
                />
                <TextInput 
                    placeholder="lugar"
                    style={styles.input}
                />
            </View>
            <Text style={estilos.subtitle}>Cronograma</Text>
            <FlatList
                data={instrucciones}
                keyExtractor = {
                    instruccion => instruccion.numPaso.toString()
                }
                renderItem={({item})=>(
                    <Step componente={item}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cont:{
        
    },
    contenedor: {
        top: 80,
        width: '100%',
        height: '100%',
        padding: 30,
    },
    input: {
        backgroundColor: "#F8F9EA",
        fontSize: 24,
        padding:8,
        borderRadius: 8,
        marginVertical: 8
    }
});