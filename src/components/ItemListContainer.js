import React, { useEffect, useState } from 'react'
import { productos } from '../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const ItemListContainer = () => {
  const [items, setIems] = useState([])
  const [cargando, setCargando] = useState(true)
  
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
                setCargando(false);
            })
            .catch((error) => {
                console.log(error);
            })
            return () => {
                setCargando(true);
            };
    }, [categoryName]);

    return (
        <div>
            { cargando ? (
              <>
                <GridLoader color="#bad0c7" size="50"/>
                </>
            ) : (
                <>
                <ItemList items={items} />
                </>
            
            )}
        </div>
      );
};


export default ItemListContainer;

