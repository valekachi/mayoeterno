import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setIems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    
    const itemCollection = collection(db, "productos");
    const filtrados = categoryName ? (query(itemCollection, where("category", "==", categoryName))) : itemCollection; 
    getDocs(filtrados)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setIems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoryName]);

  return (
    <div>
      {cargando ? (
        <>
          <GridLoader color="#bad0c7" size="50px" />
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

// const getProducts = () =>
//       new Promise((res, rej) => {
//         const prodFiltrados = productos.filter(
//           (prod) => prod.category === categoryName
//         );
//         setTimeout(() => {
//           res(categoryName ? prodFiltrados : productos);
//         }, 500);
//       });

//     getProducts()
//       .then((data) => {
//         setIems(data);
//         setCargando(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return () => {
//       setCargando(true);
//     };
//   },
