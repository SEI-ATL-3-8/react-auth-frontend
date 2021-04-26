import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../App'

const ProtectedRoute = (props) => {
  const [user, setUser] = useContext(UserContext)
  
  return (
    <Route
      path={props.path}
      render={(routingProps) => {
        if (user.id) {
          return props.render(routingProps)
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default ProtectedRoute