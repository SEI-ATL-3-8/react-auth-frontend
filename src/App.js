import { Route, Redirect } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import axios from 'axios'
import env from 'react-dotenv'

// import the store 
import {UserContext} from './context/UserContext'

function App() {
  // useContext(store) to get the value from your store 
  const {userState , fetchUser} = useContext(UserContext)

  const [user,setUser] = userState




  useEffect(fetchUser, [])


  return (
    <div>
      <NavBar 
      setUser={setUser}
      user={user}/>
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
          if(user.id) {
            <Redirect to="/profile" />
          } else {
            return <Signup 
            setUser={setUser}
            />   
          }
          
        }}
      />

      <Route
        path="/login"
        render={() => {
          if(user.id) {
           <Redirect to="/profile" />
          } else {
            return <Login 
            setUser={setUser}
            />
          }
          
        }}
      />

      <Route
        path="/profile"
        render={() => {
          if(user.id) {
            return <Profile 
            user ={user}/>
          } else {
            return <Redirect to="/login" />
          }
         
        }}
      />
    </div>
  );
}

export default App;
