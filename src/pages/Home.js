import {useContext} from 'react'
import {UserContext} from '../context/UserContext'


const Home = () => {
  const {colorState} = useContext(UserContext)
  const [color,setColor] = colorState
  return (
    <div>
      <button onClick={() => setColor('blue')}>BLUE</button>
    </div>
  )
}

export default Home