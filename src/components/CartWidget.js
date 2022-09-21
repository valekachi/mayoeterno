import React, { useContext } from "react";
import estilos from "./navbar.module.css";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  if (totalQuantity() !== 0) {
    return (
      <div className={estilos.elCarrito}>
        <span class="material-symbols-outlined"> shopping_cart </span>
        {totalQuantity() === 0 ? <></> : <span>{totalQuantity()}</span>}
      </div>
    );
  }
};

export default CartWidget;
