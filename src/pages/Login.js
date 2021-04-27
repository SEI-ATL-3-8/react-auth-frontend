import { useState, useContext } from 'react'
import axios from 'axios'
import env from 'react-dotenv'


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitForm = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, { email, password })
    .then((response) => {
      localStorage.setItem('userId', response.data.user.id)
      props.setUser(response.data.user)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
        
        <label htmlFor="signup-[password]">Password</label>
        <input type="password" id="signup-[password]" value={password} onChange={(e) => { setPassword(e.target.value) }}/>

        <input type="submit" value="Sign In!"/>
      </form>
    </div>
  )
}

export default Login