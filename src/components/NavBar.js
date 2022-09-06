import React from 'react';
import estilos from './navbar.module.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <header className={estilos.cabecera}>
          <Link to="/"><h1 className={estilos.titulo}>MAYO ETERNO | JABONES ARTESANALES </h1></Link>
          <Link to='/cart'>
            <CartWidget />
          </Link>  
        <nav>
          <ul className={estilos.barraNav}>
          <NavLink to="/category/jabones">Jabones</NavLink>
          <Link to="/category/cremas">Cremas</Link>
          <Link to="/category/aceites">Aceites Corporales</Link>
          </ul>
          
        </nav>
        
       </header>
    );
};

export default NavBar;