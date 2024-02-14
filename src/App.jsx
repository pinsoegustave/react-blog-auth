import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard'
import AddEvent from './Components/AddEvent'
import { Update } from './Components/Update'
import BlogInfo from './Components/BlogInfo'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/addEvent' element={<AddEvent />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
      <Route path='/bloginfo/:title' element={<BlogInfo />}></Route>
    </Routes>
    </BrowserRouter>
  )
  }