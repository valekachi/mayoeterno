import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { BrowserRouter} from 'react-router-dom';
import  CartProvider  from './context/CartContext';


const App = () => { 
  return (
    <BrowserRouter>
    <CartProvider>
          <NavBar /> 
          <Main />  
    </CartProvider>
    </BrowserRouter>
  
);
};
export default App;
