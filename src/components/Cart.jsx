import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div
        style={{
          maxWidth: "700px",
          margin: "60px auto",
          textAlign: "center",
        }}
      >
        <h2>🛒 Tu carrito está vacío</h2>

        <br />

        <Link to="/">
          <button>Volver a comprar</button>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h1>Carrito de compras</h1>

      <br />

      {cart.map((producto) => (
        <div
          key={producto.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "15px 0",
          }}
        >
          <div>
            <h3>{producto.nombre}</h3>

            <p>Cantidad: {producto.cantidad}</p>

            <p>Precio: ${producto.precio}</p>

            <p>
              Subtotal: $
              {producto.precio * producto.cantidad}
            </p>
          </div>

          <button onClick={() => removeItem(producto.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <br />

      <h3>Total de productos: {totalQuantity()}</h3>

      <h2>Total: ${totalPrice()}</h2>

      <br />

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <button onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link to="/checkout">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;