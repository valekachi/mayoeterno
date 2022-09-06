import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import ItemCount from './components/ItemCount';
import { BrowserRouter} from 'react-router-dom';

const App = () => { 
  const onAdd = (parametro) => {
    console.log("Agregado al carrito")
  };
  return (
    <BrowserRouter>
    <NavBar />
    <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
    <Main />
    </BrowserRouter>
);
};
export default App;
