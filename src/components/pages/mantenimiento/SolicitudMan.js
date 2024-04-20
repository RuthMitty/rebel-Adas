import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import Menu from "./MenuMan";

export const SOL_MAN = "Solicitud"

export default function SolicitudMan({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.textSubTittle}>Nombre del incidente</Text>
                </View>
            <Text style={styles.textTittle}>Datos</Text>
            <Text style={styles.textSubTittle}>Lugar</Text>
            <View style={styles.containerText}>
                <Text style={styles.textSubTittle}>Dirreción</Text>
            </View>
            <Text style={styles.textTittle}>Dificultad</Text>
            <View style={styles.containerButtons}>
                    <Button title="Media"  color={'#EBCA1F'} />
            </View>
            <Text style={styles.textTittle}>Descripción del inconveniente</Text>
            <View style={styles.containerText}>
                <Text style={styles.textSubTittle}>Se fracturó una parte de la pared de la oficina de calidad</Text>
            </View>
            <View style={styles.containerButton}>
                <Button title="Reparado"  color={'#A9C247'} />
            </View>
            </View>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 50
    },
    textTittle: {
        fontSize: 25,
        marginBottom:10,
        marginTop:10
    },
    textSubTittle: {
        fontSize: 21,
        marginBottom:10,
        marginTop:10,
        marginLeft:11
    },
    containerText: {
        backgroundColor: "#F8F9EA", 
        marginBottom:5,
        marginTop:5,
        paddingBottom:10,
        paddingTop:10
    },
    text: {
        fontSize: 15,
        marginLeft:10
    },
    containerButton:{
        overflow: 'hidden',
        borderRadius:20,
        width: '40%',
        marginTop: 20,
        marginLeft: 95,
        alignContent: "center"
    },
    containerButtons:{
        overflow: 'hidden',
        borderRadius:20,
        width: '25%',
        marginTop: 20,
        marginLeft: 10,
        alignContent: "center"
    }
})