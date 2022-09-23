import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import estilo from "./item.module.css";
import estilos from "./itemcount.module.css";
import Form from "./Form";

const Cart = () => {
  const { cart, clearCart, eliminarProd, totalPrice, totalQuantity } =
    useContext(CartContext);
    const [idCompra, setIdCompra] = useState('');

  const total = totalPrice();

    const handleId = (id) => {
      setIdCompra(id);
  };

  if (idCompra) {
      return <h1>Gracias! tu Id de compra es: {idCompra}</h1>;
  }

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
      <h1>Total: UYU${totalPrice()}</h1>
      <Form
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
    </div>
  );  
};
 
export default Cart;
