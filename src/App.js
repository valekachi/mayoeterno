import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import CartWidget from './components/CartWidget';



const App = () => { 
  const onAdd = (parametro) => {
    console.log("Agregado al carrito")
  };
  return (
    <>
    <NavBar />
    <CartWidget />
    <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
     <ItemListContainer
     rubro = "Cosmética"
     pais = "Uruguay"
     datos = {{nombre: 'Matilde', ocupacion: 'Médica'}}
     />
     <footer></footer>
       
    </>
);
};
export default App
