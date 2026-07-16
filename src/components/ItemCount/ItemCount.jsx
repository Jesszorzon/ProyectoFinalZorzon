import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={restar}>-</button>

      <span style={{ margin: "0 15px" }}>{cantidad}</span>

      <button onClick={sumar}>+</button>

      <br />
      <br />

      <button onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;