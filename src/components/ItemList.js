import React from "react";
import Item from "./Item";
import estilos from "./item.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={estilos.card}>
      {items.map((item) => (
        <Item key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ItemList;
