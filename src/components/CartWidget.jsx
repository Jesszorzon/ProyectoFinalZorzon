import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      🛒

      {totalQuantity() > 0 && (
        <span
          style={{
            background: "#FFC107",
            color: "#000",
            borderRadius: "50%",
            padding: "2px 8px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {totalQuantity()}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;