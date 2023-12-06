import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function Sobrenosotros() {
  return (
    <>
     <Navbar/>
    <div>
    <div className="titulo-principal">
    <ItemListContainer  greeting={'Sobre Nosotros'}></ItemListContainer>
    </div>
    <p className="text-container">

    En NFTSHOP, nos apasiona la convergencia entre el arte, la tecnología y la descentralización.
     Somos un equipo de entusiastas de las criptomonedas y amantes del arte que ha unido fuerzas 
     para crear un espacio único en el mundo de los NFT o Tokens No Fungibles.
    </p>

     <div className="titulo-principal">
    <ItemListContainer  greeting={'Nuestra Mision'}></ItemListContainer>
    </div>

    <p className="text-container">

      Nos esforzamos por democratizar el acceso al arte digital y ofrecer a los creadores una plataforma
      donde puedan exhibir y vender sus obras de manera justa y transparente. Creemos en la revolución 
      de los NFT como una forma de empoderar a los artistas, eliminando intermediarios y garantizando que
      cada creador reciba el reconocimiento y el valor que merece.

    </p>
    
  <div className="titulo-principal">
    <ItemListContainer  greeting={'¿Por que elegirnos?'}></ItemListContainer>
    </div>
      <p className="text-container">
      En NFTSHOP, nos destacamos por la integridad, la seguridad y la innovación. 
      Trabajamos incansablemente para proporcionar una experiencia de usuario sin igual, combinando 
      la última tecnología blockchain con un diseño intuitivo. Nuestro compromiso con la transparencia
      se refleja en cada transacción y en la autenticidad de cada NFT que ofrecemos.
      </p>


<div className="titulo-principal">
    <ItemListContainer  greeting={'Colaboramos con Creatividad'}></ItemListContainer>
    </div>
    <p className="text-container">
      Valoramos la diversidad y la creatividad en todas sus formas. Colaboramos estrechamente con artistas emergentes 
      y establecidos para ofrecer una amplia variedad de NFT, desde ilustraciones digitales hasta piezas de realidad virtual.
      Cada obra cuenta una historia única, y nos enorgullece ser el puente que conecta a los amantes del arte con sus creadores favoritos.

      ¡Gracias por formar parte de la revolución de los NFT en NFTSHOP!

    </p>
    </div>
    </>
  )
}

export default Sobrenosotros