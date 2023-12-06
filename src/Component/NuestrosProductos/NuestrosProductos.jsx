import Navbar from "../Navbar/Navbar"
import Productos from "../Productos/Productos"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
function NuestrosProductos() {
  return (
    <>
    <Navbar/>
    <div className="titulo-principal">
    <ItemListContainer  greeting={'💸Aqui estan todos Nuestros NFT💸'}></ItemListContainer>
    </div>
    <div  className="text-container">
      <p>
        
Desarrollamos NFTs para ofrecer experiencias únicas en el espacio digital respaldadas por tecnología blockchain. 
Cada NFT es una representación indivisible de activos digitales, desde obras de arte hasta coleccionables exclusivos. 
Exploramos la intersección entre creatividad y tecnología, permitiendo a los usuarios poseer, intercambiar y disfrutar contenido digital de manera innovadora. 
Nuestra plataforma NFT crea un espacio donde la autenticidad y la propiedad digital convergen, brindando emocionantes oportunidades para coleccionistas y creadores.
      </p>
    </div>
    <div className="product-card">
    <Productos></Productos>
    </div>
    </>
  )
}

export default NuestrosProductos