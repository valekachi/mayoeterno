import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>
    <NavBar />
    <ItemCount />
     <ItemListContainer
     rubro = "Cosmética"
     pais = "Uruguay"
     datos = {{nombre: 'Matilde', ocupacion: 'Médica'}}
     />
     <footer></footer>
       
    </>
  );
}
export default App;
