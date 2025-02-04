
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/signup'
import { Home } from './page/home'
import { Productform } from './component/productform'

function App() {
  

  return (
    <>
      <Routes>
        <Route path ="/login" element = {<Login />} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/" element = {<Home/>}/>
        <Route path ="/productform" element = {<Productform/>}/>
      </Routes>
    </>
  )
}

export default App
