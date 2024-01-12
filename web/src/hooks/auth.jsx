import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@authUser:user", JSON.stringify(user))
      localStorage.setItem("@authUser:token", token)
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não encontrado.")
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@authUser:token")
    localStorage.removeItem("@authUser:user")
    setData({})
  }
  useEffect(() => {
    const token = localStorage.getItem("@authUser:token")
    const user = localStorage.getItem("@authUser:user")
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }