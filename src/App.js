import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




const App = () => { 
  const onAdd = (parametro) => {
    console.log("Agregado al carrito")
  };
  return (
    <>
    <NavBar />
    <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
     <ItemListContainer/>
     <footer></footer>
       
    </>
);
};
export default App
