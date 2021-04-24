import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {props.user.id ? 
          <span>
            <span onClick={() => {
              localStorage.removeItem('userId')
              props.setUser({})
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