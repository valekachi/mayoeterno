import React from 'react'
import estilos from './navbar.module.css';


const CartWidget = () => {
  return (
    <div className={estilos.elCarrito}>
        <span class="material-symbols-outlined"  >
shopping_cart
</span>
    </div>
  )
}

export default CartWidget;