import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AunthContext'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  const {usuario, logout} = useAuth()

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name='home' size={80} color="#e94560"/>
      </View>
      <Text style={styles.titulo}>AuthApp</Text>

      <View>
        <Ionicons
        name='person-circle'
         size={50} 
         color="rgba(71, 17, 125, 0.6)"
         style={styles.icon} />

        <Text style={styles.nombre}>
        {usuario?.nombre}
      </Text>
      </View>
      
      <TouchableOpacity onPress={logout}>
  <Ionicons name="log-out-outline" size={70} color="#e94560" />
</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1a1a2e'
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
  },

  icon: {  
  marginRight: 10,  
},

  iconContainer: {
  alignItems: 'center',
  width: '100%',
  marginBottom: 20
}
})