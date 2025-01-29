
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/signup'
import { Home } from './page/home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path ="/login" element = {<Login />} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </>
  )
}

export default App
