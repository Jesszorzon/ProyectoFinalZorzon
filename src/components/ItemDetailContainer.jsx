import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const productoRef = doc(db, "products", itemId);

        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          setProducto({
            id: productoSnap.id,
            ...productoSnap.data(),
          });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducto();
  }, [itemId]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Cargando producto...
      </h2>
    );
  }

  if (!producto) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Producto no encontrado
      </h2>
    );
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;