import { useState, useContext } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import { UserContext } from '../App'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [_user, setUser] = useContext(UserContext)
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/users`, { email, password })
        .then((response) => {
          localStorage.setItem('userId', response.data.user.id)
          setUser(response.data.user)
        })
        .catch((error) => {
          console.log(error);
        })
      }}>
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
        
        <label htmlFor="signup-[password]">Password</label>
        <input type="password" id="signup-[password]" value={password} onChange={(e) => { setPassword(e.target.value) }}/>

        <input type="submit" value="Sign up!"/>
      </form>
    </div>
  )
}

export default Signup