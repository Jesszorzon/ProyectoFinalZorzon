import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>MINIMARKET</h1>

        <p>Todo lo que necesitás, en un solo lugar.</p>
      </div>

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<CheckoutForm />}
        />

        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>
              404 - Página no encontrada
            </h2>
          }
        />
      </Routes>
    </>
  );
}

export default App;