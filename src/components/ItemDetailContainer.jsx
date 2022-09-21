import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { GridLoader } from "react-spinners";
import { db } from "../firebaseConfig";
import {getDoc, doc, collection} from "firebase/firestore"
const ItemDetailContainer = ({ item }) => {
  const [items, setIems] = useState({});
  const [cargando, setCargando] = useState(true);
  const { idProd } = useParams();


  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, idProd)
    getDoc(ref).then((res) => {
      setIems({
        id: res.id,
        ...res.data()
    })
    })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setCargando(false);
      })
}, [idProd]);

  return (
    <div>
      {cargando ? (
        <>
          <GridLoader color="#bad0c7" size="70px" />
        </>
      ) : (
        <ItemDetail items={items} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

// const getItem = new Promise((resolve, reject) => {
//   const prod = productos.find((prod) => prod.id === Number(idProd));
//   setTimeout(() => {
//     resolve(idProd ? prod : productos);
//   }, 2000);
// });
// getItem
//   .then((resolve) => setIems(resolve))
//   .catch((err) => {
//     console.log("catch", err);
//   })
//   .finally(() => {
//     setCargando(false);
//   });