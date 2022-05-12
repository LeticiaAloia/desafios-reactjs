// Importo componentes.
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// Css de Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Esperamos tu compra!"} />
    </div>
  );
}

export default App;
