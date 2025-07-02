import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import Login from "./Pages/login"
import Index from './Pages/index'
import Registration from "./Pages/user"
import Admin_login from "./Pages/admin_login"
import HeroCarousel from "./component/herosection"
import Navbar from './component/navbar'
import About from "./Pages/about"
import User from "./Pages/userhome"
import Footer from "./component/footer"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      {/* <HeroCarousel/> */}
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      
        <Route path='/Admin_login' element={<Admin_login />} />
        <Route path='/userhome' element={<User />} />
        
        

        <Route path='/footer' element={<Footer />} />
      </Routes>
    </>
  )
}

export default App;