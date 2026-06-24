import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="marca">
        MINIMARKET
      </div>

      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/category/almacen">Almacén</Link>
        <Link to="/category/bebidas">Bebidas</Link>
        <Link to="/category/limpieza">Limpieza</Link>
      </div>
    </nav>
  );
}

export default Navbar;