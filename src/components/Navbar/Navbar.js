import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Bamboola Kids</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Quienes Somos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Catalogo
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/'>Bebes</Link></li>
            <li><Link className="dropdown-item" to='/'>Nenas</Link></li>
            <li><Link className="dropdown-item" to='/'>Nenes</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled"></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        <button className="btn btn-dark" type="submit">Carrito</button>
      </form>
    </div>
  </div>
    </nav>
  );
}

export default Navbar;
