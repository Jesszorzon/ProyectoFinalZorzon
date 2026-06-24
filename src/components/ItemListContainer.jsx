import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    getProductos.then((res) => {
      if (categoryId) {
        const productosFiltrados = res.filter(
          (producto) => producto.categoria === categoryId
        );

        setItems(productosFiltrados);
      } else {
        setItems(res);
      }

      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Cargando productos...
      </h2>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>
        {categoryId
          ? `Categoría: ${categoryId}`
          : "Todos los productos"}
      </h2>

      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;