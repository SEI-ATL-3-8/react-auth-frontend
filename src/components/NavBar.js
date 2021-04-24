import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../App'

const NavBar = () => {
  const [user, setUser] = useContext(UserContext)
  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {user.id ? 
          <span>
            <span onClick={() => {
              localStorage.removeItem('userId')
              setUser({})
            }}>Logout</span>
            <Link to="/profile">Profile</Link>
          </span>
          :
          <span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </span>
        }
      </nav>
    </div>
  )
}

export default NavBar