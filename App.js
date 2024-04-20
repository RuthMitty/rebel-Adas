import React from "react";
import { View} from 'react-native';
// import LoginForm from './src/components/LoginForm';
// import Menu from './src/components/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SolicitudAbas, { SOLICITUD_ABAS } from "./src/components/pages/solicitudAbas";
import HomeAbas from "./src/components/pages/HomeAbas";
import Menu from "./src/components/pages/abastecimiento/MenuAbas";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      // <View>
      //   {/* <LoginForm/>
      //   <Menu/> */}
      //   <SolicitudAbas/>
      // </View>
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Home Abas">
      <Stack.Screen name="Home Abas" component={HomeAbas} />
        <Stack.Screen name={SOLICITUD_ABAS} component={SolicitudAbas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}