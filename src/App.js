import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar />
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
