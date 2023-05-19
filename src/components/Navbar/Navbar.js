import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Quienes Somos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/' >Contacto</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Catalogo
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">Nenas</Link></li>
              <li><Link className="dropdown-item" href="#">Nenes</Link></li>
              <li><Link className="dropdown-item" href="#">Bebes</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;