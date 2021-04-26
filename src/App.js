import { Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
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
          return <Signup />
        }}
      />

      <Route
        path="/login"
        render={() => {
          return <Login />
        }}
      />

      <Route
        path="/profile"
        render={() => {
          return <Profile />
        }}
      />
    </div>
  );
}

export default App;
