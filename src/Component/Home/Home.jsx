import Navbar from "../Navbar/Navbar"
import './Home.css'
import Productos from "../Productos/Productos"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="titulo-principal">
    <ItemListContainer  greeting={'Bienvenido al nuevo mundo del NFT💻❗'}></ItemListContainer>
    </div>
    <div className="personajes-3d">
        <spline-viewer url="https://prod.spline.design/EH6HZwK2Tcl2UzSC/scene.splinecode"></spline-viewer>
    </div>
    <div className="text-container">
        <p>
        Los NFT representan una revolución en la creatividad digital al fusionar la tecnología blockchain con el arte y la propiedad digital. 
        Estos tokens únicos e inmutables convierten cada creación en una experiencia auténtica, 
        eliminando intermediarios y permitiendo la propiedad verificable en la cadena de bloques.
        Este mundo de los NFT no solo democratiza el arte, sino que también da vida a coleccionables 
        digitales que cuentan historias más allá de lo visual, conectando comunidades globales. 
        Redefiniendo la propiedad digital, los NFT crean mercados descentralizados y fomentan nuevas formas de expresión e innovación. 
        Es un viaje hacia un futuro donde la creatividad encuentra su expresión máxima y la tecnología blockchain lidera la era digital. 
        Es un mundo donde cada token cuenta una historia única en el lienzo digital del mañana.💡🎨✨
        </p>     
    </div>
    <div className="sub-titulo">
    <ItemListContainer greeting={'Nuestras Card NFT'}></ItemListContainer>
    </div>
    <section className="product-card">
    <Productos/>
    </section>
    </>
    
  )
}

export default Home