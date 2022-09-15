import React, { useEffect, useState } from 'react'
import { productos } from '../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setIems] = useState([])
  
  const { categoryName } = useParams()

useEffect(() => {
  const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = productos.filter(
                    (prod) => prod.category === categoryName
                );
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : productos);
                }, 500);
            });

        getProducts()
            .then((data) => {
                setIems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

  return (
      <ItemList items={items}/>
    );
};


export default ItemListContainer;

