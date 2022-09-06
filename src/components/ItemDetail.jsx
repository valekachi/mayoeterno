import React from 'react'
import estilos from './item.module.css'
import ItemCount from './ItemCount'


const ItemDetail = ({items}) => {
  return (
      <div className={estilos.vistaDetalle} key={items.id}>
        <img src={items.img} alt="" className={estilos.fotoProductoMod}/>
        <ul className={estilos.datosDetalle}>
        <li><p>{items.title}</p></li>
        <li><p>Precio: ${items.price}.-</p></li>
        <li><p>Categoria:{items.category}</p></li>
        <li><p>Stock:{items.stock}</p></li>
        </ul>
        <ItemCount />
      </div>
    
  )
}

export default ItemDetail