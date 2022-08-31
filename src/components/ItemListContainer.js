import React, { useEffect, useState } from 'react'
import { productos } from '../mock/products';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [items, setIems] = useState([])
  
  
useEffect(() => {
  const obtenerProd = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000);
    
  });
  obtenerProd
  .then((data) => {
    setIems(data)
  })
  .catch((err) => {
    console.log('catch', err)
  })
  .finally(() => {
    console.log('Finally')
  })
}, []);

  return (
      <ItemList items={items}/>
    );
};


export default ItemListContainer;

