import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import PDF from "../../assets/icons/pdf.png"

export default function ContainerPDF({ navigation }){
    return(
        <View style={styles.container}>
            <Image source={PDF} style={styles.imgPDF}/>
            <View style={styles.containerText}>
                <Text style={styles.text}>Nombre del reporte ...</Text>
                <Text style={styles.text}>Fecha de creación</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems: "center",
        margin: 10,
        flexDirection:"row"
    },
    containerText:{
        alignItems:"center"
    },
    text:{
        marginBottom:6,
        marginTop: 6,
        fontSize: 15
    },
    imgPDF:{
        marginRight:40
    }
})