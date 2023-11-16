import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
  return (
    <>
    <div className="bnc">
      <h2 className="bienvenida-container">{greeting}</h2>
    </div>
    </>
  )
}

export default ItemListContainer
