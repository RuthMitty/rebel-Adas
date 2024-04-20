import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import Manual from "../../assets/icons/PDF_file_1.png"

export default function ContainerManual({ navigation }){
    return(
        <View style={styles.container}>
            <Image source={Manual}/>
            <Text style={styles.containerText}>Manual ...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems: "center",
        margin: 10
    },
    containerText:{
        marginBottom:10,
        marginTop: 10
    }
})
