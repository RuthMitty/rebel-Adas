import React, {useState} from "react";
import { Image, View, Text, Button} from "react-native";
import Checkbox from 'expo-checkbox';

export const SOLICITUD_ABAS = "Solicitud Abas"

export default function SolicitudAbas(){
    const [isSelected, setSelection] = useState(false);
    return(
        <View>
            <View>
                <Text>Primeros auxilios</Text>
                <Text>Lista de suministros solicitados</Text>
                <Text>Nombre del incidente</Text>
                <Text>Lugar</Text>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                />
                <Text>Suministro</Text>
                <Button title="Entregado"/>
            </View>
        </View>
    );
}