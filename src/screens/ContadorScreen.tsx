import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(5);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab
        title="+1"
        onPress={() => setContador(contador + 1)}
        contador={contador}
        position="br"
      />

      <Fab
        title="-1"
        onPress={() => setContador(contador - 1)}
        contador={contador}
        position="bl"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -15,
  }
});
