

// import store and useContext
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'


const Profile = () => {
  // import the pieces of state from global state (the store/context)
  const {userState, colorState} = useContext(UserContext)
  // assign them to state
  const [user,setUser] = userState
  const [color,setColor] = colorState
  return (
    <div>
      <h1>{user.email}</h1>
      <h1>{color}</h1>
    </div>
  )
}

export default Profile