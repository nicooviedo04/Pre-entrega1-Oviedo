import "./Productos.css"
import { useContext } from "react"
import { dataContext } from "../Context/DataContext"


function Productos() {
  const { data } = useContext(dataContext)
  return data.map((product)=>{
    return (
        <div className="card">
          <img src={product.img} alt="imagen-nft" />
          <h3 class="card-header">{product.name}</h3>
          <h4>{product.price}</h4>
          <button>Comprar</button>
        </div>
    )

  })
}

export default Productos