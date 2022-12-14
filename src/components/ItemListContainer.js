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
      setCargando(true);
    const itemCollection = collection(db, "productos");
    const referencia = categoryName 
    ? (query(itemCollection, where("category", "==", categoryName))) 
    : itemCollection; 
    
    
    
    getDocs(referencia)
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
          <GridLoader color="#bad0c7" size="15px" />
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

