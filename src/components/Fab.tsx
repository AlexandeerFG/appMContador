import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  contador: number;
  position?: 'br' | 'bl';
  onPress: () => void;
}
/* Componente general para crear un boton a la izquierda(position:bl) o ala derecha(position:br) al alcance de tu dispositivo */
export const Fab = ({title, onPress, contador, position}: Props) => {
  return (
    <TouchableOpacity
      disabled={
        position === 'br' && contador === 10
          ? true
          : position === 'bl' && contador === 0
          ? true
          : false
      }
      style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}
      onPress={onPress}>
      <View
        /* eslitizado para posicion y color del tipo de boton */
        style={
            contador === 10 && position === 'br'
            ? styles.blocked
            : contador === 0 && position === 'bl'
            ? styles.blocked
            : position === 'bl'
            ? styles.fabL
            : styles.fabR
        }>
          {/* etiqueta para estilizar el centrado del texto dentro del button */}
        <Text style={styles.fabText}>
          {(contador === 10 && position === 'br') ||
          (contador === 0 && position === 'bl')
            ? '\uD83D\uDE22'
            : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  blocked: {
    backgroundColor: '#8A0501',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabR: {
    backgroundColor: '#268D77',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabL: {
    backgroundColor: '#363034',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
