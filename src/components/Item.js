import React from 'react'
import estilos from './item.module.css'


const Item = ({items}) => {
  return (
    <div key={items.id}>
      <div className={estilos.cuadraditos}>
        <p>{items.title}</p>
        <h5>${items.price}.-</h5>
        <img src={items.img} alt="" className={estilos.fotoProducto}/>
        </div>
    </div>
  )
}

export default Item;