import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({setIsLogged}) => {
    const navigate = useNavigate()

    const handleLogin = () => {
        setIsLogged(true)
        navigate('/contact')
    }

    const handleLogout = () => {
        setIsLogged(false)
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LoginPage