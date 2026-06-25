import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AunthContext'

export default function HomeScreen() {
  const {usuario, logout} = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.nombre}>
        {usuario?.nombre}
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={logout}
      >
      <Text style={styles.botonTexto}>
        Cerrar Sesion
      </Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  nombre: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30
  },
  boton: {
    backgroundColor: '#e94560',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
})