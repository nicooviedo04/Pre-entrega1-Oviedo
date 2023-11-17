import Navbar from "../Navbar/Navbar"
import Productos from "../Productos/Productos"
function NuestrosProductos() {
  return (
    <>
    <Navbar/>
    <div className="product-card">
    <Productos></Productos>
    </div>
    </>
  )
}

export default NuestrosProductos
