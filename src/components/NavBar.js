import React from 'react';
import estilos from './navbar.module.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useState, useEffect } from 'react';




const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const collectionCat = collection(db, 'category');

    getDocs(collectionCat).then((res) => {
        const categorias = res.docs.map((cat) => {
            return {
                id: cat.id,
                ...cat.data(),
            };
        });
        setCategories(categorias);
    });
}, []);


    return (
    <>
        <header className={estilos.cabecera}> 
    
    <Link to="/"><h1 className={estilos.titulo}>MAYO ETERNO | JABONES ARTESANALES </h1></Link> <nav>
    <ul className={estilos.barraNav}>
   
        <Link to="/cart">
        <CartWidget />
        </Link>
    {categories.map((cat) => ( 
    <NavLink key={cat.id} to={`/category/${cat.route}`}>
        {cat.name}
    </NavLink> ))}</ul>
</nav>

</header>
</>
)};


export default NavBar;