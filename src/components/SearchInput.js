import React from "react";
import { View, StyleSheet, TextInput, Image} from "react-native";
import Search from "../../assets/icons/search.png"

export default function SearchInput({ placeholder }){
    return(
        <View style={styles.containerInput}>
            <TextInput placeholder={ placeholder } style={styles.textImput} placeholderTextColor='#88786F'/>
            <Image source={Search} style={styles.imagen}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
        alignItems:"center",
        marginTop: 5,
        borderRadius: 10,
        borderColor: '#88786F',
        borderWidth: 1.5,
        alignItems: "center",
        width: "70%",
        justifyContent: "space-around"
    },
    textImput: {
        padding: 6,
        marginTop: 10,
        marginBottom: 10
    },
    imagen:{
        marginLeft: 10
    },
    containerButton:{
        overflow: 'hidden',
        borderRadius:20,
        width: '40%',
        marginTop: 20,
        marginLeft: 90,
        alignContent: "center"
    }
    
})