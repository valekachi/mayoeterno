import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import estilo from "./item.module.css";
import estilos from "./itemcount.module.css";

const Cart = () => {
  const { cart, clearCart, eliminarProd, totalPrice, totalQuantity } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1 className={estilos.datosDetalle}>
          No tienes productos en tu carrito
        </h1>
        <Link to="/">
          <h2 className={estilos.datosDetalle}>¡Quiero ir al catálogo!</h2>
        </Link>
      </>
    );
  }

  console.log(cart);
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio por unidad: UYU{prod.price}</p>
          <img
            src={prod.img}
            alt="Producto en tu carrito"
            className={estilo.fotoProducto}
          />
          <button onClick={() => eliminarProd(prod.id)} className={estilos.btn}>
            Eliminar producto
          </button>
        </div>
      ))}
      <button onClick={clearCart} className={estilos.btn}>
        Limpiar mi carrito
      </button>
      <h1>Total de unidades: {totalQuantity()}</h1>
      <h1>Total: ${totalPrice()}</h1>
    </div>
  );
};

export default Cart;
