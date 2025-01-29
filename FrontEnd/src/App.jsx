
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/signup'

function App() {
  

  return (
    <>
      <Routes>
        <Route path ="/login" element = {<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
