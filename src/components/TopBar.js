import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function TopBar ({title}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.botonback}>
                <Image source={require("../../assets/icons/back.png")}/>
            </TouchableOpacity>
            <Text style={styles.texto}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8AC7DE",
        width: "100%",
        height: 86,
        top: 0,
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 19,
        gap: 120
    },
    texto: {
        fontSize: 24,
        color: 'black',
    },
    botonback: {
        
    }
});