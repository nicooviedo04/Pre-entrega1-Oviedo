import './App.css'
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cartwidget from './Component/Cartwidget/Cartwidget'
import Productos from './Component/Productos/Productos'
import Sobrenosotros from './Component/Sobrenosotros/Sobrenosotros'
import DataProvider from './Component/Context/DataContext'
function App() {
    return (
      <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cartwidget/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Sobrenosotros' element={<Sobrenosotros/>}/>
        </Routes>
      </BrowserRouter>
      </DataProvider>
     
  )
}

export default App
