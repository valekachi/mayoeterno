import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { GridLoader } from "react-spinners";
import { db } from "../firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [items, setIems] = useState({});
  const [cargando, setCargando] = useState(true);
  const { idProd } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, idProd);
    getDoc(ref)
      .then((res) => {
        setIems({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [idProd]);

  return (
    <div>
      {cargando ? (
        <>
          <GridLoader color="#ba d0c7" size="70px" />
        </>
      ) : (
        <ItemDetail items={items} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
