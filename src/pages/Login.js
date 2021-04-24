import { useState, useContext } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import { UserContext } from '../App'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [_user, setUser] = useContext(UserContext)
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/users/login`, { email, password })
        .then((response) => {
          localStorage.setItem('userId', response.data.user.id)
          setUser(response.data.user)
        })
        .catch((error) => {
          console.log(error);
        })
      }}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
        
        <label htmlFor="login-[password]">Password</label>
        <input type="password" id="login-[password]" value={password} onChange={(e) => { setPassword(e.target.value) }}/>

        <input type="submit" value="Log In!"/>
      </form>
    </div>
  )
}

export default Login