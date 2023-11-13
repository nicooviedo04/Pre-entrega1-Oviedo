import './App.css'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cartwidget from './Component/Cartwidget/Cartwidget'
import Productos from './Component/Productos/Productos'
import Sobrenosotros from './Component/Sobrenosotros/Sobrenosotros'
import Contacto from './Component/Contacto/Contacto'
function App() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cartwidget/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Sobrenosotros' element={<Sobrenosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
      
      </> 
  )
}

export default App
