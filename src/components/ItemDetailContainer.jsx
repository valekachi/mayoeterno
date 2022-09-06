import React, { useEffect, useState } from 'react'
import { productos } from '../mock/products';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item}) => {

    const [items, setIems] = useState({})
    const [cargando, setCargando] = useState(true)
    const { idProd } = useParams();


    useEffect(() => {

            const getItem = new Promise((resolve, reject) => {
              const unicoProd = productos.find((prod)=> prod.id === 3)
                setTimeout(() => {
                 resolve(idProd ?  unicoProd : productos )
                },2000)
              })
              getItem.then(resolve =>setIems(resolve))
              .catch((err) => {
                console.log('catch', err)
              })
              .finally(() => {
                setCargando(false)
              })
            },[idProd])
            
  return (
    <div>
        { cargando ? (
            <h4 >Cargando...</h4>
        ) : (
            <ItemDetail items={items} />
        
        )}
    </div>
  )
}

export default ItemDetailContainer