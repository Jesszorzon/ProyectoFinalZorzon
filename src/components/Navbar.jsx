import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoMarca">
        <Link to="/">
          <img
            src="/logo.jpeg"
            alt="Minimarket"
            className="logoNavbar"
          />
        </Link>

        <h2>MINIMARKET</h2>
      </div>

      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/category/almacen">Almacén</Link>
        <Link to="/category/bebidas">Bebidas</Link>
        <Link to="/category/limpieza">Limpieza</Link>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;