import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import estilos from "../../../constants/estilos";


export default function Step({componente}){
    return(
        <View style={styles.instruccion}>
            <Text style={styles.texto}>{componente.numPaso}</Text>
            <Text style={styles.texto}>{componente.texto}</Text>
            <Text style={styles.crono}>{componente.hora}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    instruccion:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        minHeight: 'auto',
        paddingVertical: 10,
        justifyContent: 'space-around'
    },
    texto: {
        fontSize: 20,
        color: 'black',
        maxWidth: '60%',
        flexWrap: 'wrap'
    },
    crono: {
        minWidth: 'auto',
        justifyContent: 'flex-end'
    }
});