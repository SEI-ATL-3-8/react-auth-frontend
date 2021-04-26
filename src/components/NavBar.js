import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/signup">SignUp</Link>
      {' | '}
      <Link to="/login">LogIn</Link>
      {' | '}
      <span
        onClick={() => {
          console.log('you logged out!');
        }}
      >Logout</span>
      {' | '}
      <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default NavBar