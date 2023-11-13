import './App.css'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cartwidget from './Component/Cartwidget/Cartwidget'
function App() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cartwidget/>}/>
        </Routes>
      </BrowserRouter>
      
      
      </> 
  )
}

export default App
