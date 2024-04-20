import React from "react";
import LoginForm from './src/components/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SolicitudAbas, { SOLICITUD_ABAS } from "./src/components/pages/abastecimiento/solicitudAbas";
import ReaAbas, { REA_ABAS } from "./src/components/pages/abastecimiento/ReaAbas";
import HomeAbas from "./src/components/pages/abastecimiento/HomeAbas";
import Manuals, { MANUALS } from "./src/components/pages/Manuales";
import Reports, { REPORTS} from "./src/components/pages/Reportes";
import HomeMan from "./src/components/pages/mantenimiento/HomeMan";
import MasMan, { MASMAN } from "./src/components/pages/mantenimiento/MasMan";
import SolicitudMan, { SOL_MAN } from "./src/components/pages/mantenimiento/SolicitudMan";
// import TopBar from './src/components/TopBar';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      //Login  
      //*<NavigationContainer >
      //   <Stack.Navigator initialRouteName="Login">
      //     <Stack.Screen name="Home Abastecimiento" component={LoginForm} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      //Abmitración 
      //   <NavigationContainer >
      //     <Stack.Navigator initialRouteName="Home Abastecimiento">
      //     <Stack.Screen name="Home Abastecimiento" component={HomeAbas} />
      //       <Stack.Screen name={SOLICITUD_ABAS} component={SolicitudAbas} />
      //       <Stack.Screen name={MANUALS} component={Manuals} />
      //       <Stack.Screen name={REPORTS} component={Reports} />
      //       <Stack.Screen name={REA_ABAS} component={ReaAbas} />
      //     </Stack.Navigator>
      // </NavigationContainer>
      //Mantenimiento
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Home Abastecimiento">
      <Stack.Screen name="Home Abastecimiento" component={HomeMan} />
        <Stack.Screen name={SOL_MAN} component={SolicitudMan} />
        <Stack.Screen name={MANUALS} component={Manuals} />
        <Stack.Screen name={REPORTS} component={Reports} />
        <Stack.Screen name={MASMAN} component={MasMan} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
