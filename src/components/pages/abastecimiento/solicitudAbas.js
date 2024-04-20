import React, {useState} from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import Menu from "./MenuAbas";
import Checkbox from 'expo-checkbox';

export const SOLICITUD_ABAS = "Solicitud"

export default function SolicitudAbas({ navigation }){
    const [isSelected, setSelection] = useState(false);
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
            <Text style={styles.textTittle}>Primeros auxilios</Text>
            <Text style={styles.textSubTittle}>Lista de suministros solicitados</Text>
            <View style={styles.containerText}>
                <Text style={styles.text}>Nombre del incidente</Text>
            </View>
            <View style={styles.containerText}>
                <Text  style={styles.text}>Lugar</Text>
            </View>
            <View style={styles.containerCheck}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#A9C247'}
                />
                <Text  style={styles.textCheck}>Suministro</Text>
            </View>
            <View style={styles.containerCheck}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#A9C247'}
                />
                <Text  style={styles.textCheck}>Suministro</Text>
            </View>
            <View style={styles.containerCheck}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#A9C247'}
                />
                <Text  style={styles.textCheck}>Suministro</Text>
            </View>
            <View style={styles.containerCheck}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#A9C247'}
                />
                <Text  style={styles.textCheck}>Suministro</Text>
            </View>
            <View style={styles.containerCheck}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#A9C247'}
                />
                <Text  style={styles.textCheck}>Suministro</Text>
            </View>
            <View style={styles.containerButton}>
                <Button title="Entregado"  color={'#A9C247'} />
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
        marginTop:10
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
    containerCheck:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
        marginTop: 5
    },
    textCheck:{
        marginLeft: 5,
        fontSize: 14
    },
    containerButton:{
        overflow: 'hidden',
        borderRadius:20,
        width: '40%',
        marginTop: 20,
        marginLeft: 80,
        alignContent: "center"
    }
})