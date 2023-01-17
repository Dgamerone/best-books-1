import "./App.css";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Libros from "./paginas/Libros";
import Contacto from "./paginas/Contacto";
import Carrito from "./paginas/Carrito";
import Saludo from "./componentes/ItemListContainer/Saludo";
import Banner from "./componentes/Banner";
import { Footer } from "./componentes/Footer";
import { ItemList } from "./componentes/item/ItemList";

function App() {
  const saludos = {
    mensaje: "Bienvenidos al mundo de las letras.",
    promocion: "10% off en Efectivo",
  };

  return (
    <div className="App">
      <Saludo saludos={saludos} />

      <BrowserRouter>
        <Navbar />
        <Banner />
        <hr />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
