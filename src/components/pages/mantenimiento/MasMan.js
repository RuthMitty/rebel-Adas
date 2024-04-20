import React from "react";
import { View, Text, Button, StyleSheet, TextInput} from "react-native";
import Menu from "./MenuMan";

export const MASMAN  = "Mantenimiento Extra"

export default function MasMan({ navigation }){
    return(
        <View style={{flex: 1, marginTop:50}}>
            <View style={styles.containerBox}>
                <Text style={styles.textTittle}>Nombre del incidente</Text>
                <TextInput placeholder="Agrega nombre del incidente" style={styles.textImput} />
            </View>
            <View style={styles.containerBox}>
                <Text style={styles.textTittle}>Datos</Text>
                <Text style={styles.textSubTittle}>Lugar</Text>
                <TextInput placeholder="Agrega nombre del lugar" style={styles.textImput}/>
            </View>
            <View style={styles.boxButtons} >
                <View style={styles.containerButtons}>
                    <Button title="Fácil"  color={'#A9C247'} />
                </View>
                <View style={styles.containerButtons}>
                    <Button title="Media"  color={'#EBCA1F'} />
                </View>
                <View style={styles.containerButtons}>
                    <Button title="Urgente"  color={'#F16B7A'} />
                </View>
            </View>
            <View style={styles.containerBox}>
                <Text style={styles.textTittle}>Descripción del inconveniente</Text>
                <TextInput placeholder="Agrega la descripción del inconveniente" style={styles.textImput} />
            </View>
            <View style={styles.containerBox}>
                <View style={styles.containerButton}>
                    <Button title="Confirmar"  color={'#A9C247'} />
                </View>
            </View>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    boxButtons:{
        marginLeft:60,
        marginRight:60,
        marginBottom: 15,
        display:"flex",
        flexDirection:"row",
        alignContent:"space-around"
    },
    containerBox:{
        marginLeft:50,
        marginRight:50,
        marginBottom: 15
    },
    textTittle: {
        fontSize: 25,
        marginBottom:10
    },
    textSubTittle: {
        fontSize: 21,
        marginBottom:5,
        marginTop:5
    },
    containerText: {
        backgroundColor: "#F8F9EA", 
        marginBottom:5,
        marginTop:5,
        paddingBottom:10,
        paddingTop:10
    },
    containerButtons:{
        overflow: 'hidden',
        borderRadius:20,
        width: '25%',
        marginTop: 20,
        marginLeft: 10,
        alignContent: "center"
    },
    containerButton:{
        overflow: 'hidden',
        borderRadius:20,
        width: '50%',
        marginTop: 20,
        marginLeft: 65,
        alignContent: "center"
    },
    textImput: {
        borderWidth: 1.5,
        padding: 6,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#88786F'
    },
})