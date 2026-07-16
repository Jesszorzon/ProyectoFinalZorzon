import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="cardProducto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="imagenProducto"
      />

      <h3>{producto.nombre}</h3>

      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <Link to={`/item/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;