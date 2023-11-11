import './Navbar.js'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
          <div className="container-fluid">
            <a href='#' className="navbar-brand">NFTSHOP</a>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"  />
              <button className="btn btn-outline-success" type="submit" id="cartWidget-">🛒</button>
            </form>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
