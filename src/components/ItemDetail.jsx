import React from 'react'
import { useState } from 'react'
import estilos from './item.module.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const ItemDetail = ({items}) => {

  const [cantidad, setCantidad] = useState(0); 
  const {addToCart, getProductQuantity} = useContext(CartContext);

    const onAdd = (cantidadItem) => {
    setCantidad(cantidadItem);
    addToCart(items, cantidadItem);
  }
  const quantity = getProductQuantity(items.id);

  return (
      <div className={estilos.vistaDetalle} key={items.id}>
        <img src={items.img} alt="" className={estilos.fotoProductoMod}/>
        <ul className={estilos.datosDetalle}>
        <li><p>{items.title}</p></li>
        <li><p>Precio: ${items.price}.-</p></li>
        <li><p>Categoria: {items.category}</p></li>
        <li><p>Cantidad: {quantity}</p></li>
        <li>
      {cantidad === 0 ? (
       <ItemCount stock={items.stock} initial={quantity} onAdd={onAdd}/> ) :
       (  <Link to="/cart"><h2 className={estilos.irAlCarrito}>Ir al Carrito</h2>
          </Link>
        )}
        </li>
        </ul>
      </div>
    
  )}


export default ItemDetail;