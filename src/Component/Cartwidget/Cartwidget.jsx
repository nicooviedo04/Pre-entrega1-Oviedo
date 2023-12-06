import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElement from "./CartElement";
import Navbar from "../Navbar/Navbar";
import CartTotal from "./CartTotal";
import "./Cartwidget.css";

function Cartwidget() {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-v">Tu carrito está vacío</h2>
      )}
    </>
  );
}

export default Cartwidget;
