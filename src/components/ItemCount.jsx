import React, { useState } from 'react'
import estilos from './itemcount.module.css'


const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1);

  const suma = () => {
      count < stock ?  setCount(count + 1) : alert("Has llegado a la maxima capacidad del carrito")
  }

  const resta = () => {
    setCount(count - 1); }
                    return (
<div className={estilos.contador}>
  <button onClick={suma} className={estilos.btn}>+</button>
  <p className={estilos.btn}>{count} </p>
  <button onClick={resta} className={estilos.btn} disabled={count === 1}>-</button>
  <button onClick={onAdd} className={estilos.btn}>Agregar a mi carrito</button>
  

</div>
)
}
export default ItemCount;