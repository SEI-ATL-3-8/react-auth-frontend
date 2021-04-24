import { Route, Redirect } from 'react-router-dom'
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
    <div>
        <NavBar user={user} setUser={setUser} />
        <Route path="/" exact render={() => {
          return <Home />
        }} />
        <Route path="/signup" render={() => {
          if (user.id) {
            return <Redirect to="/profile" />
          } else {
            return <Signup setUser={setUser} />
          }
        }} />
        <Route path="/login" render={() => {
          if (user.id) {
            return <Redirect to="/profile" />
          } else {
            return <Login setUser={setUser} />
          }
        }} />
        <Route path="/profile" render={() => {
          if (user.id) {
            return <Profile />
          } else {
            return <Redirect to="/login" />
          }
        }} />
    </div>
  );
}

export default App;
