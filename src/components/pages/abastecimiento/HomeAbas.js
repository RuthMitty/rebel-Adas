import React from "react";
import { View, StyleSheet} from "react-native";
import Menu from "./MenuAbas";
import CardAlerta from '../../CardAlerta';

export default function HomeAbas({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <CardAlerta tipo="solicitud" subtitulo="Area" incidente="Nombre del incidente" navigation={navigation}/>
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