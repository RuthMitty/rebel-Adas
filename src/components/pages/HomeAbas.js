import React from "react";
import { View } from "react-native";
import Menu from "./abastecimiento/MenuAbas";
export default function HomeAbas({ navigation }){
    return(
        <View style={{flex:1}}>
            <Menu navigation={navigation}/>
        </View>
    );
}