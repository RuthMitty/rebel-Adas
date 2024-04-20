import React from "react";
import { View, StyleSheet} from "react-native";
import Menu from "../pages/abastecimiento/MenuAbas";
import SearchInput from "../SearchInput";
import ContainerManual from "../ContainerManual";

export const MANUALS = "Manuales"

export default function Manuales({ navigation }){
    return(
        <View style={{flex: 1}}>
            <View  style={styles.container}>
                <View style={styles.containerSearch}>
                    <SearchInput placeholder={"Buscar"}/>
                </View>
                <View style={styles.boxManual}>
                    <View style={styles.boxContainerManual}>
                        <ContainerManual/>
                        <ContainerManual/>
                        <ContainerManual/>
                    </View>
                    <View style={styles.boxContainerManual}>
                        <ContainerManual/>
                        <ContainerManual/>
                        <ContainerManual/>
                    </View>
                    <View style={styles.boxContainerManual}>
                        <ContainerManual/>
                        <ContainerManual/>
                        <ContainerManual/>
                    </View>
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
    containerSearch:{
        alignItems:"center",
        marginBottom: 20,
        fontSize: 30
    },
    boxContainerManual:{
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-around"
    },
    boxManual:{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-around",
        marginTop:50
    }
})