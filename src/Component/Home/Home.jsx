import Navbar from "../Navbar/Navbar"
import './Home.css'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting={'Bienvenido al nuevo mundo del NFT💻❗'}></ItemListContainer>
    <div className="text-container">
        <p>
        Bienvenido al emocionante nuevo mundo de los NFT, donde la creatividad se fusiona con la tecnología para dar vida a una revolución digital única. Los NFT (Tokens No Fungibles) han desatado una ola de innovación que está transformando la manera en que concebimos y compartimos el arte, los coleccionables y la propiedad digital.
        Imagina un universo donde cada obra de arte, cada creación digital, se convierte en una pieza única e inmutable gracias a la tecnología blockchain. Este viaje al futuro nos lleva más allá de las fronteras tradicionales del arte, permitiéndonos explorar nuevos horizontes en el vasto panorama de la creatividad digital.
        En este fascinante cosmos, los NFT actúan como portales que conectan a artistas con una audiencia global, eliminando intermediarios y democratizando el acceso al arte. Ya no se trata simplemente de observar una obra, sino de poseer una parte de la historia, autenticada y registrada en la cadena de bloques.
        Los coleccionables digitales adquieren vida propia en este universo, donde los tokens no solo representan valor, sino también autenticidad y singularidad. Desde obras de arte hasta momentos icónicos de la cultura digital, cada NFT cuenta una historia que va más allá de lo visual, transformándose en una experiencia colectiva que une a comunidades de todo el mundo.
        Este nuevo mundo de los NFT no solo impacta el arte, sino que redefine la manera en que interactuamos con la propiedad digital. La tokenización de bienes digitales no solo permite la creación de mercados descentralizados, sino que también abre las puertas a nuevas formas de expresión, innovación y colaboración.
        Prepárate para sumergirte en un viaje donde la creatividad encuentra su manifestación más pura y donde la tecnología blockchain marca el camino hacia una era digital sin precedentes. Bienvenido al futuro de los NFT, donde la imaginación no tiene límites y cada token cuenta una historia única en el lienzo digital del mañana. 💡🎨✨
        </p>
    </div>
    </>
  )
}

export default Home