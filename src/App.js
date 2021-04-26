import { Route, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import NavBar from './components/NavBar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

import './App.css';

const UserContext = React.createContext([{}, () => {}])

function App() {
  const [user, setUser] = useState({})

  const loadUser = () => {
    if (localStorage.getItem('userId')) {
      axios.get(`${env.BACKEND_URL}/users/verify`, {
        headers: { Authorization: localStorage.getItem('userId') }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }
  useEffect(loadUser, [])
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
          <NavBar />
          <Route path="/" exact render={() => {
            return <Home />
          }} />
          <Route path="/signup" render={() => {
            if (user.id) {
              return <Redirect to="/profile" />
            } else {
              return <Signup />
            }
          }} />
          <Route path="/login" render={() => {
            if (user.id) {
              return <Redirect to="/profile" />
            } else {
              return <Login />
            }
          }} />
          <ProtectedRoute
            path='/profile'
            render={(_routingProps) => {
              return <Profile />
            }}
            mustBeLoggedIn={true}
          />
          
          {/* <Route path="/profile" render={() => {
            if (user.id) {
              return <Profile />
            } else {
              return <Redirect to="/login" />
            }
          }} /> */}
      </div>
    </UserContext.Provider>
  );
}

export default App
export { UserContext }
