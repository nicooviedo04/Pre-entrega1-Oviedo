import "./Productos.css"
import { useContext } from "react"
import { dataContext } from "../Context/DataContext"


function Productos() {
  const { data, cart, setCart } = useContext(dataContext)
  
  const buyProducts = (product) =>{
    console.log (product)
    setCart([...cart, product])
  }

  return data.map((product)=>{
    return (
        <div className="card" key={product.id}>
          <img src={product.img} alt="imagen-nft" />
          <h3 class="card-header">{product.name}</h3>
          <h4>${product.price}</h4>
          <button onClick={()=>buyProducts (product)}>Comprar</button>
        </div>
    )

  })
}

export default Productos