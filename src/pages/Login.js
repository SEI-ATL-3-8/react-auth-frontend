import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/users/login`, { email, password })
        .then((response) => {
          localStorage.setItem('userId', response.data.user.id)
          props.setUser(response.data.user)
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