import { createContext, useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: any) {
  const [usuario, setUsuario] = useState<any>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    verificarSesion()
  }, [])

  const verificarSesion = async () => {
    try {
      const datos = await AsyncStorage.getItem('usuario')
      if (datos) setUsuario(JSON.parse(datos))
    } finally {
      setCargando(false)
    }
  }

  const login = async (email: string, password: string) => {
    // Por ahora simulamos autenticación
    // En una app real aquí iría el fetch a tu API
    if (email === 'test@test.com' && password === '123456') {
      const datos = { email, nombre: 'Fernando' }
      await AsyncStorage.setItem('usuario', JSON.stringify(datos))
      setUsuario(datos)
      return true
    }
    return false
  }

  const registro = async (nombre: string, email: string, password: string) => {
    // Simulamos registro exitoso
    const datos = { email, nombre }
    await AsyncStorage.setItem('usuario', JSON.stringify(datos))
    setUsuario(datos)
    return true
  }

  const logout = async () => {
    await AsyncStorage.removeItem('usuario')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, registro, logout, cargando }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)