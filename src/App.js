import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/navBar/Navbar";
import Contacto from "./paginas/Contacto";
import Saludo from "./componentes/itemListContainer/Saludo";
import Banner from "./componentes/banner/Banner";
import { Footer } from "./componentes/footer/Footer.jsx";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailCointainer";

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
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/cart" element={<Carrito />} /> */}
          <Route path="*" element={<h1> 404: Page not found </h1>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
