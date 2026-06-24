import { useParams } from "react-router-dom";
import productos from "../data/productos";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const producto = productos.find(
    (prod) => prod.id === Number(itemId)
  );

  if (!producto) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Producto no encontrado
      </h2>
    );
  }

  return (
    <div className="detalleProducto">
      <h2>{producto.nombre}</h2>

      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>
    </div>
  );
}

export default ItemDetailContainer;