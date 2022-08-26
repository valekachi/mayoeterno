import React, { useState } from 'react'


const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1);

  const suma = () => {
      count < stock ?  setCount(count + 1) : alert("Has llegado a la maxima capacidad del carrito")
  }

  const resta = () => {
    setCount(count - 1); }
                    return (
<div>
  <button onClick={suma}>+</button>
  <button onClick={resta} disabled={count === 1}>-</button>
  <button onClick={onAdd}>Agregar a mi carrito</button>
  <p>Contador: {count} </p>

</div>
)
}
export default ItemCount;