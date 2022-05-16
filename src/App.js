// Importo componentes.
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// Css de Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Esperamos tu compra!"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
