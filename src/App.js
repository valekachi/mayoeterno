import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { BrowserRouter} from 'react-router-dom';
import  CartProvider  from './context/CartContext';


const App = () => { 

  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Main />
    </BrowserRouter>
    </CartProvider>
);
};
export default App;
