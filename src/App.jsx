import './App.css'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import Auth from './pages/Auth/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}>
      </Route>
      </Route>
    </Routes>
     
    </>
  )
}

export default App
