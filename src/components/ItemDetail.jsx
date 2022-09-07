import React from 'react'
import { useState } from 'react'
import estilos from './item.module.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'



const ItemDetail = ({items}) => {

  const [cantidad, setCantidad] = useState(0); 

  const onAdd = (argumento) => {
    setCantidad(argumento);
  }

  return (
      <div className={estilos.vistaDetalle} key={items.id}>
        <img src={items.img} alt="" className={estilos.fotoProductoMod}/>
        <ul className={estilos.datosDetalle}>
        <li><p>{items.title}</p></li>
        <li><p>Precio: ${items.price}.-</p></li>
        <li><p>Categoria: {items.category}</p></li>
        <li><p>Stock:{items.stock}</p></li>
        </ul>
      {cantidad === 0 ? (
       <ItemCount stock={items.stock} initial={1} onAdd={onAdd}/> ) :
       (  <Link to="/cart">
        <h3>Cantidad:: {cantidad}</h3>
        <h1> IR AL CARRITO</h1>
          </Link>
        )}
      </div>
    
  )}


export default ItemDetail;