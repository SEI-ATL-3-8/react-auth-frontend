import { Link } from 'react-router-dom'

// import store and context
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'


const NavBar = () => {
  // useContext and assign to state of our global user state
  const {userState, colorState} = useContext(UserContext)
  const [user,setUser] = userState
  // conditionally render based on state 


  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      {user.id ? 
      <span>
        <span
        onClick={() => {
          localStorage.removeItem('userId')
          setUser({})
        }}
      >Logout</span> 
           {' | '}
      <Link to="/profile">Profile</Link>
      </span>
      
      :  
        <span>
         <Link to="/signup">SignUp</Link>
          {' | '}

        <span>
          <Link to="/login">LogIn</Link></span>
        </span>}
    </nav>
  )
}

export default NavBar