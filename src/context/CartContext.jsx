import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addItem = (item, cantidad) => {
    const productoExistente = cart.find((prod) => prod.id === item.id);

    if (productoExistente) {
      const nuevoCarrito = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );

      setCart(nuevoCarrito);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  // Eliminar un producto
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de productos
  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  // Precio total
  const totalPrice = () => {
    return cart.reduce(
      (acc, prod) => acc + prod.precio * prod.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};