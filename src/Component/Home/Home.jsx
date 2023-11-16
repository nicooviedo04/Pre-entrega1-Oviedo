import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting={'Bienvenido al nuevo mundo del NFT💻❗'}></ItemListContainer>
    </>
  )
}

export default Home