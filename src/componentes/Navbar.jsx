import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget2/CartWidget";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="logo">
          Best Books
        </Link>
        <buttons
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </buttons>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/libros">
              Libros
            </Link>
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
            <Link className="nav-link" to="/carrito">
              <CartWidget />
              Carrito
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
