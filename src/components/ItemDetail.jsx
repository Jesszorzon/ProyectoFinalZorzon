import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ producto }) {
  const [agregado, setAgregado] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="detalleProducto">
      <h2>{producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: "250px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <p>{producto.descripcion}</p>

      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <p>
        <strong>Stock:</strong> {producto.stock}
      </p>

      {!agregado ? (
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;