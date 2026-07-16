import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);

      try {
        const productosRef = collection(db, "products");

        const snapshot = await getDocs(productosRef);

        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoryId) {
          setItems(
            productos.filter(
              (producto) => producto.categoria === categoryId
            )
          );
        } else {
          setItems(productos);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    getProductos();
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