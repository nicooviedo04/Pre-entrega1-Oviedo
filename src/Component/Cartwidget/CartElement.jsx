import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartElement = () => {
  const { cart } = useContext(dataContext);

  return cart.map((product) => (
    <div className="cartContent" key={product.id}>
      <img className="cartImage" src={product.img} alt="nft-card" />
      <div className="descriptionContainer">
        <h3 className="title">{product.name}</h3>
        <h4 className="description">{product.description}</h4>
        <h4 className="price">${product.price}</h4>
      </div>
    </div>
  ));
};

export default CartElement;
