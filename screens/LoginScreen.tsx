import { useState } from 'react'
import { View, Text, TextInput, 
         TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useAuth } from '../context/AunthContext'
import { Ionicons } from '@expo/vector-icons'

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Completa todos los campos')
      return
    }

    const exitoso = await login(email, password)
    
    if (!exitoso) {
      Alert.alert('Error', 'Credenciales incorrectas')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="lock-closed" size={ 100 } color="#e94560"/>
      </View>      
      <Text style={styles.titulo} >AuthApp</Text>
      <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>

      <View style={styles.inputContainer}>
        <Ionicons 
        name='mail' 
        size={35} 
        color="#7fb5d6"        
        style={styles.icon}
        />
        
        <TextInput
        style={styles.input}        
        placeholder="Email"
        placeholderTextColor="#a0a0b0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons 
        name='key-outline' 
        size={35} 
        color="#7fb5d6"
        style={styles.icon}
        />
        <TextInput        
        style={styles.input}      
        placeholder="Password"
        placeholderTextColor="#a0a0b0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      </View>
      
      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={styles.botonTexto}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
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
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#a0a0b0',
    marginBottom: 40
  },
  input: {
    backgroundColor: '#0f3460',
    color: '#ffffff',
    paddingVertical: 15,
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