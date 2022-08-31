import React from 'react'


const Item = ({items}) => {
  return (
    <div key={items.id}>
        <p>{items.title}</p>
        <h5>${items.price}.-</h5>
        <img src={items.img} alt="" />
    </div>
  )
}

export default Item;