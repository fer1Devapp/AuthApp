import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AunthContext'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const { registro } = useAuth()

  const handleRegister = async () => {
    if (!nombre || !email || !password) {
      Alert.alert('Error', 'Todos los campos son requeridos')
      return
    }

    const exitoso = await registro(nombre, email, password)
    if (exitoso) {
      Alert.alert('Éxito', 'Registro completado')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name='person-add' size={ 70 } color= "#e94560"/>
      </View>
      <Text style={styles.titulo}>Crear cuenta</Text>
      <Text style={styles.subtitulo}>Regístrate para continuar</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons 
        name='person-add-outline'
        size={20}
        color="#7689"
        style={styles.icon} />

        <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#a0a0b0"
        value={nombre}
        onChangeText={setNombre}
      />
      </View>
      
      <View style={styles.inputContainer}>
        
        <Ionicons
        name='mail-outline'
        size={20}
        color="#7689"
        style={styles.icon} />
        
        <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#a0a0b0"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      
      <View style={styles.inputContainer}>

        <Ionicons
        name='key-outline'
        size={20}
        color="#7689"
        style={styles.icon} />


        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a0a0b0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      </View>      

      <TouchableOpacity style={styles.boton} onPress={handleRegister}>
        <Text style={styles.botonTexto}>Crear cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#1a1a2e'
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 16,
    color: '#a0a0b0',
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#0f3460',
    color: '#ffffff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15
  },
  boton: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    color: '#a0a0b0',
    textAlign: 'center',
    fontSize: 14
  },

  inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#0f3460',
  borderRadius: 10,
  paddingHorizontal: 15,
  marginBottom: 15,
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