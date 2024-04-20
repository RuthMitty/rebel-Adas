import React from "react";
import { View, StyleSheet} from "react-native";
import Menu from "../pages/abastecimiento/MenuAbas";
import SearchInput from "../SearchInput";
import ContainerPDF from "../ContainerPDF";

export const REPORTS = "Reportes"

export default function Reportes({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View  style={styles.container}>
                <View style={styles.containerSearch}>
                    <SearchInput placeholder={"Buscar"}/>
                </View>
            </View>
            <ContainerPDF/>
            <ContainerPDF/>
            <ContainerPDF/>
            <ContainerPDF/>
            <ContainerPDF/>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 50
    },
    containerSearch:{
        alignItems:"center",
        marginBottom: 20,
        fontSize: 30
    }
})