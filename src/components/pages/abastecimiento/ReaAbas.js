import React,  {useState}  from "react";
import { View, StyleSheet, Text, TextInput, Image, Button} from "react-native";
import Checkbox from 'expo-checkbox';
import Menu from "./MenuAbas";
import SearchInput  from "../../SearchInput";

export const REA_ABAS = "Reabastecimiento"

export default function ReaAbas({ navigation }){
const [isSelected, setSelection] = useState(false);
    return(
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.containerSearch}>
                    <SearchInput placeholder={"Buscar Item"}/>
                </View>
                <View style={styles.boxContainerCheck}>
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
                        <Button title="Completado"  color={'#A9C247'} />
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
        marginBottom: 20
    },
    containerCheck:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
        alignItems:"center",
        marginTop: 5
    }
})