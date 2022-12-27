import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import { Inicio } from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";
import Carrito from "./paginas/Carrito";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer />
    </div>
  );
}

export default App;
