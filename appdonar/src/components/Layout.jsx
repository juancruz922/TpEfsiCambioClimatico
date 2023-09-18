import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src=""
            alt=""
            width="120"
          />
        </Link>
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
              <Link className="nav-link" to="/">
                Campañas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Informate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Participá
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                Conocenos
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex">
          <a
            className="btn btn-donate"
            href="/Donaciones" 
          >
            DONÁ AHORA
          </a>
        </div>
      </div>
    </nav>
        <Outlet />
    </React.Fragment>)
}

export default Layout