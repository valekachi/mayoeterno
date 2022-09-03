import React, { useEffect, useState } from 'react'
import { jabonRomero } from '../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item}) => {

    const [items, setIems] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
            const getItem = new Promise((resolve, reject) => {
                setTimeout(() => {
                 resolve(jabonRomero)
                },2000)
              })
              getItem.then(resolve =>setIems(resolve))
              .catch((err) => {
                console.log('catch', err)
              })
              .finally(() => {
                setCargando(false)
              })
            },[])
            
  return (
    <div>
        { cargando ? (
            <h4>Cargando...</h4>
        ) : (
            <ItemDetail items={items} />
        
        )}
    </div>
  )
}

export default ItemDetailContainer