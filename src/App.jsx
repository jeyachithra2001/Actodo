import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Home from "./pages/home"
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
  const [users, setUsers] = useState([{ username: "chithra", password: "123" }, { username: "Aravind", password: "456" }])
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users = {users} setUsers={setUsers}/>}/>
        <Route path='/signup' element={<Signup users = {users} setUsers={setUsers}/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
