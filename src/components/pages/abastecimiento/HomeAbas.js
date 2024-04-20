import React from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import Menu from "./MenuAbas";
import CardAlerta from '../../CardAlerta';

export default function HomeAbas({ navigation }){
    return(
        <View style={styles.container}>
            <CardAlerta tipo="solicitud" subtitulo="Area" incidente="Nombre del incidente" navigation={navigation}/>
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