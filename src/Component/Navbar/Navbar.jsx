import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">NFT Shop</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Productos"} className="nav-link" href="#">Nuestros Productos</Link>
              
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Más opciones
              </a>
              <ul className="dropdown-menu">
              <li> 
                <Link to={"/Sobrenosotros"} className="dropdown-item" href="#">Sobre nosotros</Link>
              </li> 
              </ul>
            </li>
          </ul>
          <form className="d-flex">
           <Link to={"/Cart"}>
           <button className="btn btn-outline-success" type="submit" id='Cart'>🛒</button>
           </Link> 
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;

