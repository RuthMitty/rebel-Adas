import React from "react";
import { TextInput, Button, View, Image, Text, StyleSheet} from "react-native";
import Logo from "../../assets/image/Logo.png";

export default function LoginForm() {
    return(
        <View>
            <Image source={Logo}/>
            <Text style={styles.text}>Usuario</Text>
            <TextInput placeholder="Agrega tu usuario" style={styles.textImput} placeholderTextColor='#88786F'/>
            <Text style={styles.text}>Contraseña</Text>
            <TextInput placeholder="Agrega tu contraseña" style={styles.textImput} placeholderTextColor='#88786F'/>
            <View style={styles.containerButton}>
                <Button  title="Acceder" onPress={() => console.log("Acceder")} color= '#A9C247' />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    textImput: {
        borderWidth: 1.5,
        padding: 6,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#88786F'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
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

