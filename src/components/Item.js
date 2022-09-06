import React from 'react'
import estilos from './item.module.css'
import { Link } from 'react-router-dom'


const Item = ({items}) => {
  return (
    <div key={items.id}>
       <Link to={`/detail/${items.id}`}>
        <div>
        <p>{items.title}</p>
        <h5>${items.price}.-</h5>
        <img src={items.img} alt="" className={estilos.fotoProducto}/>
        </div> 
        </Link>
    </div>
  )
}

export default Item;