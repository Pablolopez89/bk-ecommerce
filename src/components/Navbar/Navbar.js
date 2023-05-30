import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Bamboola Kids</Link>
    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
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
          <ul className="dropdown-menu Categories">
            <li><Link to={`/category/nenas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Nenas</Link></li>
            <li><Link to={`/category/nenes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Nenes</Link></li>
            <li><Link to={`/category/bebes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Bebes</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">       
        <button className="btn btn-dark bi bi-cart" type="submit"> Carrito</button>
      </form>
    </div>
  </div>
    </nav>
  );
}

export default Navbar;
