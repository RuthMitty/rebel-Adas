import { StyleSheet, Text, View, Image} from 'react-native';
import LoginForm from './src/components/LoginForm';
import Menu from './Menu';
import TopBar from './src/components/TopBar';
import CardAlerta from './src/components/CardAlerta';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TopBar title="Incendio"/>
      <LoginForm/>
      <Menu/> */}
      <CardAlerta tipo="emergencia" incidente="Incendio en la torre más alta de la empresa"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
