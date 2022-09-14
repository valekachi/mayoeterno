import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import estilo from "./item.module.css";
import estilos from "./itemcount.module.css";
const Cart = () => {
  const { cart, clearCart, eliminarProd } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <img src={prod.img} alt="Producto en tu carrito" className={estilo.fotoProducto} />
          <button onClick={() => eliminarProd(prod.id)} className={estilos.btn}>
            Eliminar Producto
          </button>
          <button onClick={clearCart} className={estilos.btn}>Clear Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
