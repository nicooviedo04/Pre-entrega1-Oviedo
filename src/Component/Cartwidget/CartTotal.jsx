
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, el) => acc + parseFloat(el.price), 0);
  return (
    <div className="carTotal">
      <h3>Total a pagar: ${total}</h3>
      <button className="btn-pagar">Pagar</button>
    </div>
  );
}

export default CartTotal;
