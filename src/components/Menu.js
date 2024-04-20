import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SOLICITUD_ABAS } from "./pages/abastecimiento/solicitudAbas";

export default function Menu({ navigation }){
    return(
        <View style={styles.navContainer}>
            <TouchableOpacity style={styles.contIcon}>
                <Image style={styles.icons} source={require("../../assets/icons/instructivos.png")}/>
                <Text style={styles.textButton}>Manuales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contIcon} onPress={() => navigation.navigate(SOLICITUD_ABAS)}>
                <Image style={styles.icons}  source={require("../../assets/icons/task.png")}/>
                <Text style={styles.textButton}>Más</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contIcon}>
                <Image style={styles.icons} source={require("../../assets/icons/manuales.png")}/>
                <Text style={styles.textButton}>Reportes</Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 86,
        backgroundColor: "#8AC7DE",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icons: {
        width: 30,
        height: 30,
        padding:10,
        resizeMode: 'contain'
    },
    contIcon: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        textAlign: 'center',
        color: 'white'
    }

})

