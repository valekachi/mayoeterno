import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const sumarCantidad = (item, cantidad) => {
    const carritoActualizado = cart.map((prod) => {
      if (prod.id === item.id) {
        const productoActualizado = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return productoActualizado;
      } else {
        return prod;
      }
    });
    setCart(carritoActualizado);
  };
  console.log(cart);

  const clearCart = () => {
    setCart([]);
  };

  const eliminarProd = (id) => {
    alert(`Se eliminará producto ${id}`);
    const carritoFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(carritoFiltrado);
  };

  const totalPrice = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
      acumulador += prod.cantidad * prod.price;
    });
    return acumulador;
  };

  const totalQuantity = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
        acumulador += prod.cantidad;
    });
    setUnidades(acumulador);
};  


  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  useEffect(() => {
    totalQuantity();
    // eslint-disable-next-line
}, [cart]);

  
  return (
    <CartContext.Provider
      value={{
        cart,
        unidades,
        addToCart,
        isInCart,
        clearCart,
        eliminarProd,
        totalPrice,
        getProductQuantity,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
