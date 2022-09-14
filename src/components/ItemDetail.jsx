import React from 'react'
import { useState } from 'react'
import estilos from './item.module.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const ItemDetail = ({items}) => {

  const [cantidad, setCantidad] = useState(0); 
  const {addToCart} = useContext(CartContext);

    const onAdd = (cantidadItem) => {
    setCantidad(cantidadItem);
    addToCart({...items, cantidadItem});
  }

  return (
      <div className={estilos.vistaDetalle} key={items.id}>
        <img src={items.img} alt="" className={estilos.fotoProductoMod}/>
        <ul className={estilos.datosDetalle}>
        <li><p>{items.title}</p></li>
        <li><p>Precio: ${items.price}.-</p></li>
        <li><p>Categoria: {items.category}</p></li>
        <li><p>Stock:{items.stock}</p></li>
        <li>
      {cantidad === 0 ? (
       <ItemCount stock={items.stock} initial={1} onAdd={onAdd}/> ) :
       (  <Link to="/cart"><h2>Ir al Carrito</h2>
          </Link>
        )}
        </li>
        </ul>
      </div>
    
  )}


export default ItemDetail;