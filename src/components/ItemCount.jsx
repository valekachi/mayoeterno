import React, { useState } from 'react'

const ItemCount = () => {
        const [count, setCount] = useState(0);

        let tope = 15
        const suma = () => {
            count < tope ?  setCount(count + 1) : alert("Has llegado a la maxima capacidad del carrito")
        }

        const resta = () => {
          setCount(count - 1); }
  return (
    <div>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button disabled={count === 0}>Agregar a mi carrito</button>
        <p>Contador: {count} </p>

    </div>
  )
}
export default ItemCount