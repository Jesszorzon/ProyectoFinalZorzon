import { useContext, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    const orden = {
      buyer: datos,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const ordersRef = collection(db, "orders");

      const docRef = await addDoc(ordersRef, orden);

      // Descontar stock de cada producto
      for (const producto of cart) {
        const productoRef = doc(db, "products", producto.id);

        await updateDoc(productoRef, {
          stock: increment(-producto.cantidad),
        });
      }

      setOrderId(docRef.id);

      clearCart();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al generar la compra.");
    }
  };

  if (orderId) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          textAlign: "center",
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,.15)",
        }}
      >
        <h2>✅ ¡Compra realizada con éxito!</h2>

        <br />

        <h3>Tu número de orden es:</h3>

        <p
          style={{
            color: "#0B1F4D",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {orderId}
        </p>

        <br />

        <p>Gracias por comprar en MINIMARKET.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,.15)",
      }}
    >
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={datos.nombre}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={datos.apellido}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={datos.email}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={datos.telefono}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;