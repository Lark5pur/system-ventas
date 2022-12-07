import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-danger" to="/">
            SystemVentas
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-light text-uppercase" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productos">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>

            </ul>
            <div className="buttoms">
                <NavLink to="/login" className="btn btn-outline-light">
                    <i className="fa fa-sign-in me-1"></i> Login</NavLink>
            </div>
            <div className="buttoms">
                <NavLink to="/register" className="btn btn-outline-light ms-2">
                    <i className="fa fa-user-plus me-1"></i> Registrarse</NavLink>
            </div>
            <div className="buttoms">
                <NavLink to="/cart" className="btn btn-outline-light ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Cartera</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
