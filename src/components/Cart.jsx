import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import estilos from "./item.module.css";
const Cart = () => {
  const { cart, clearCart, eliminarProd } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <img src={prod.img} alt="Producto en tu carrito" className={estilos.fotoProducto} />
          <button onClick={() => eliminarProd(prod.id)}>
            Eliminar Producto
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
