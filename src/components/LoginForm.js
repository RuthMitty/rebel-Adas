import React from "react";
import { TextInput, Button, View, Image, Text, StyleSheet} from "react-native";
import Logo from "../../assets/image/Logo.png";

export default function LoginForm() {
    return(
        <View style={styles.container}>
            <Image source={Logo}/>
            <View>
                <Text style={styles.text}>Usuario</Text>
                <TextInput placeholder="Agrega tu usuario" style={styles.textImput} placeholderTextColor='#88786F'/>
                <Text style={styles.text}>Contraseña</Text>
                <TextInput placeholder="Agrega tu contraseña" style={styles.textImput} placeholderTextColor='#88786F'/>
            </View>
            <View style={styles.containerButton}>
                <Button  title="Acceder" onPress={() => console.log("Acceder")} color= '#A9C247' />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: "center"
    },
    textImput: {
        borderWidth: 1.5,
        padding: 6,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#88786F'
    },
    text:{
        display:"flex",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        alignItems: "flex-start"
    },
    containerButton: {
        overflow: 'hidden',
        borderRadius:10,
        width: 150,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20
    },
});

