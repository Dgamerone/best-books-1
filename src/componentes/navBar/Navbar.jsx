import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./navBar.css"
import UserMenu from "./UserMenu";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/">
          Best Books
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to={'/category/Clásico'}>
              Clásico
            </Link>
            <Link className="nav-link" to={'/category/Suspenso'}>
              Suspenso
            </Link>
            <Link className="nav-link" to={'/category/Estratégia'}>
              Estratégia
            </Link>
            <Link className="nav-link" to={'/category/Terror'}>
              Terror
            </Link>
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
            <Link className="cart nav-link" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
