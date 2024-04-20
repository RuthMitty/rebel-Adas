import React from "react";
import { View} from 'react-native';
// import LoginForm from './src/components/LoginForm';
// import Menu from './src/components/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SolicitudAbas, { SOLICITUD_ABAS } from "./src/components/pages/abastecimiento/solicitudAbas";
import ReaAbas, { REA_ABAS } from "./src/components/pages/abastecimiento/ReaAbas";
import Manuals, { MANUALS } from "./src/components/pages/Manuales";
import Reports, { REPORTS} from "./src/components/pages/Reportes";
import HomeAbas from "./src/components/pages/abastecimiento/HomeAbas";
// import Menu from "./src/components/pages/abastecimiento/MenuAbas";
// import TopBar from './src/components/TopBar';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      // <View>
      //   {/* <LoginForm/>
      //   <Menu/> */}
      //   <SolicitudAbas/>
      // </View>
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Home Abastecimiento">
      <Stack.Screen name="Home Abastecimiento" component={HomeAbas} />
        <Stack.Screen name={SOLICITUD_ABAS} component={SolicitudAbas} />
        <Stack.Screen name={MANUALS} component={Manuals} />
        <Stack.Screen name={REPORTS} component={Reports} />
        <Stack.Screen name={REA_ABAS} component={ReaAbas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
