import React from "react";
import { View, StyleSheet} from "react-native";
import Menu from "./MenuAbas";
import CardAlerta from '../../CardAlerta';
import { REA_ABAS } from "./ReaAbas";

export default function HomeAbas({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
            <CardAlerta tipo="solicitud" subtitulo="Area" incidente="Nombre del incidente" onPress={() => navigation.navigate(REA_ABAS)}/>
            </View>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30,
        alignItems: "center"
    }
})