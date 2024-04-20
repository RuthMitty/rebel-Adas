import { View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import estilos from '../../constants/estilos';

export default function CardSolicitud({tipo, subtitulo, incidente}){
    return(
        <TouchableOpacity style={styles.contenedor}>
            <Text style={estilos.title}>{tipo === "emergencia" ? "Emergencia" : "Solicitud"}</Text>
            <View>
                <Text style={estilos.subtitle}>{subtitulo}</Text>
            </View>
            <Text style={estilos.text}>{incidente}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: 'white',
        borderColor: '#A9C247',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 25,
        minHeight: 'auto'
    }

});