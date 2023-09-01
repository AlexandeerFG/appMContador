import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
/* interfaces */
interface Props {
  title: string;
  contador: number;
  position?: 'br' | 'bl';
  onPress: () => void;
}
/* Componente general para crear un boton a la izquierda(position:bl) o ala derecha(position:br) al alcance de tu dispositivo */
export const Fab = ({title, onPress, contador, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={ 0.8 }
        disabled={
          position === 'br' && contador === 10
            ? true
            : position === 'bl' && contador === 0
            ? true
            : false
        }
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <View
          /* estilizado para posicion y color del tipo de boton */
          style={
            (contador === 10 && position === 'br') || (contador === 0 && position === 'bl')
              ? styles.blocked
              : position === 'bl'
              ? styles.fabL
              : styles.fabR
          }>
          {/* etiqueta para estilizar el centrado del texto dentro del button */}
          <Text style={styles.fabText}>
            {
              (contador === 10 && position === 'br') || (contador === 0 && position === 'bl')
                ? '\uD83D\uDE22'  //-- emoji en unicode
                : title
            }
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          disabled={
            position === 'br' && contador === 10
              ? true
              : position === 'bl' && contador === 0
              ? true
              : false
          }
          background={TouchableNativeFeedback.Ripple('#FFFFFF', true, 30)} //-- Ripple solo funciona en android
          onPress={onPress}>
          <View
            /* estilizado para posicion y color del tipo de boton */
            style={
              ((contador === 10 && position === 'br') || (contador === 0 && position === 'bl'))
                ? styles.blocked
                : position === 'bl'
                ? styles.fabL
                : styles.fabR
            }>
            {/* etiqueta para estilizar el centrado del texto dentro del button */}
            <Text style={styles.fabText}>
              {
                (contador === 10 && position === 'br') || (contador === 0 && position === 'bl')
                ? '\uD83D\uDE22'  //-- emoji en unicode
                : title
              }
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  /* platform lee el tipo de dispositvo donde se monta la aplicacion */
  return Platform.OS === 'android' ? android() : ios();
};
/* Estilizados para los componentes */
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 10,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
  },
  fabL: {
    backgroundColor: '#363034',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
