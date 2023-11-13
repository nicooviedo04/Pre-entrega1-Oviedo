import './App.css'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
      
      
      </> 
  )
}

export default App
