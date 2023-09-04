import React from 'react';
import { NavLink } from 'react-router-dom';
import './NabVar.css';
import './opa.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="./opa.png"
            alt=""
            width="120"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/campaigns">
                Campañas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/learn-more">
                Informate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/get-involved">
                Participá
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                Conocenos
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex">
          <a
            className="btn btn-donate"
            href=""
          >
            DONÁ AHORA
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
