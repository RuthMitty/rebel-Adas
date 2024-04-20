import React from "react";
import { TextInput, Button, View, Text} from "react-native";

export default function LoginForm() {
    return(
        <View>
            <TextInput placeholder="Usuario"/>
            <TextInput placeholder="Contraseña"/>
            <Button title="Acceder" onPress={() => console.log("Acceder")}/>
        </View>
    );
}