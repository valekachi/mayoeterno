import React, { useEffect, useState } from 'react'
import estilos from './itemcount.module.css'



const ItemCount = ({stock, onAdd, initial = 1}) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(initial);
}, [initial])
  
  const suma = () => {
      count < stock ?  setCount(count + 1) : alert("Has llegado a la maxima capacidad del carrito")
  }

  const resta = () => {
    setCount(count - 1); }

    const agregarAlCarrito = () => {
      onAdd(count);
  };

  return (
<div className={estilos.contador}>
  <button onClick={suma} className={estilos.btn}>+</button>
  <p className={estilos.btn}>{count} </p>
  <button onClick={resta} className={estilos.btn} disabled={count === 1}>-</button>
  <button onClick={agregarAlCarrito} className={estilos.btn}>Agregar a mi carrito</button>
  

</div>
)
}
export default ItemCount;