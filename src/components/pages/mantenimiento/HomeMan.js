import React from "react";
import { View, StyleSheet} from "react-native";
import Menu from "./MenuMan";
import CardAlerta from '../../CardAlertaMan';

export default function HomeMan({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <CardAlerta tipo="solicitud" subtitulo="00-00-00" incidente="Nombre del incidente" navigation={navigation}/>
            </View>
            <View style={styles.container}>
                <CardAlerta tipo="emergencia" subtitulo="Estatus" incidente="Nombre del incidente" navigation={navigation}/>
            </View>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: "center"
    }
})