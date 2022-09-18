import React, { useEffect, useState } from "react";
import { productos } from "../mock/products";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { GridLoader } from "react-spinners";
const ItemDetailContainer = ({ item }) => {
  const [items, setIems] = useState({});
  const [cargando, setCargando] = useState(true);
  const { idProd } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      const prod = productos.find((prod) => prod.id === Number(idProd));
      setTimeout(() => {
        resolve(idProd ? prod : productos);
      }, 2000);
    });
    getItem
      .then((resolve) => setIems(resolve))
      .catch((err) => {
        console.log("catch", err);
      })
      .finally(() => {
        setCargando(false);
      });
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
