import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/base/Footer'
import Navbar from './components/base/Navbar'
import About from './components/pages/About'
import Contactus from './components/pages/Contactus'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Projects from './components/pages/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/Portfolio' element={<Projects/>}/>
          <Route path='/contact' element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
