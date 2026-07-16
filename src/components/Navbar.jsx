import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoMarca">
        <NavLink to="/">
          <img
            src="/logo.jpeg"
            alt="Minimarket"
            className="logoNavbar"
          />
        </NavLink>

        <h2>MINIMARKET</h2>
      </div>

      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink" : ""
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/category/almacen"
          className={({ isActive }) =>
            isActive ? "activeLink" : ""
          }
        >
          Almacén
        </NavLink>

        <NavLink
          to="/category/bebidas"
          className={({ isActive }) =>
            isActive ? "activeLink" : ""
          }
        >
          Bebidas
        </NavLink>

        <NavLink
          to="/category/limpieza"
          className={({ isActive }) =>
            isActive ? "activeLink" : ""
          }
        >
          Limpieza
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;