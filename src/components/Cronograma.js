import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function Cronograma(){
    const fecha = new Date();
    const hora = fecha.getTime();

    const [steps, setSteps] = useState([]);
    
    function crearPaso(){
        
    }

    return(
        <View style={styles.contenedor}>
            <TextInput style={styles.paso} onChangeText={crearPaso}/>
            <TouchableOpacity onPress={() =>{
                setSteps([
                    ...steps,
                    { numPaso: numPaso++, paso: texto, tiempo: hora }
                ]);
            }}>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        minHeight: 'auto',
    },
    paso: {
        borderWidth: 1,
        borderColor: '#88786F',

    }
});