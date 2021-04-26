import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css';

function App() {
  const [user, setUser] = useState({})

  const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      axios.get(`${env.BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }
  useEffect(fetchUser, [])
  
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Route
        path="/"
        exact
        render={() => {
          return <Home />
        }}
      />

      <Route
        path="/signup"
        render={() => {
          if (user.id) {
            return <Redirect to="/profile" />
          } else {
            return <Signup setUser={setUser} />
          }
        }}
      />

      <Route
        path="/login"
        render={() => {
          if (user.id) {
            return <Redirect to="/profile" />
          } else {
            return <Login setUser={setUser} />
          }
        }}
      />

      <Route
        path="/profile"
        render={() => {
          if (user.id) {
            return <Profile user={user} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
    </div>
  );
}

export default App;
