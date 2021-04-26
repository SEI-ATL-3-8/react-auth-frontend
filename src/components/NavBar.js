import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}

      {props.user.id ? 
        <span>
          <span
            onClick={() => {
              localStorage.removeItem('userId')
              props.setUser({})
            }}
          >Logout</span>
          {' | '}
          <Link to="/profile">Profile</Link>

        </span>
      :
        <span>
          <Link to="/signup">SignUp</Link>
          {' | '}
          <Link to="/login">LogIn</Link>

        </span>
      }
      

    </nav>
  )
}

export default NavBar