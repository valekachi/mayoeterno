import estilos from './navbar.module.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className={estilos.cabecera}>
          <h1 className={estilos.titulo}>MAYO ETERNO | JABONES ARTESANALES </h1>
        <nav>
          <ul className={estilos.barraNav}>
            <li>
              <a href="https://www.google.com/?hl=es">INICIO</a>
              </li>
            <li>
            <a href="https://www.google.com/?hl=es">CATALOGO</a>
            </li>
            <li>
            <a href="https://www.google.com/?hl=es">SOBRE NOSOTRAS</a>
            </li>
            <li>
            <a href="https://www.google.com/?hl=es">CONTACTO</a>
            </li>
          </ul>
          <CartWidget />
        </nav>
        
       </header>
    );
};

export default NavBar;