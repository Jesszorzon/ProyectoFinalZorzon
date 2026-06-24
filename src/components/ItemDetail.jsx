function ItemDetail({ producto }) {
  return (
    <div className="detalleProducto">
      <h2>{producto.nombre}</h2>

      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;