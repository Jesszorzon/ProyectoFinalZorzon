# MINIMARKET

Proyecto Final de React JS desarrollado utilizando React, React Router DOM, Context API y Firebase Firestore.

---

# Descripción

MINIMARKET es una aplicación web de e-commerce que permite a los usuarios navegar por un catálogo de productos, filtrarlos por categorías, visualizar el detalle de cada producto, agregarlos al carrito de compras y finalizar una compra registrando la orden en Firebase Firestore.

---

# Tecnologías utilizadas

- React
- React Router DOM
- Firebase Firestore
- Context API
- Vite
- CSS3

---

# Funcionalidades

- Visualización dinámica de productos desde Firebase Firestore.
- Filtrado de productos por categorías.
- Detalle individual de cada producto.
- Selector de cantidad mediante ItemCount.
- Carrito de compras utilizando Context API.
- Eliminación individual de productos del carrito.
- Vaciado completo del carrito.
- Checkout para finalizar la compra.
- Generación de órdenes de compra en Firebase Firestore.
- Actualización automática del stock luego de confirmar la compra.
- Navegación SPA mediante React Router DOM.

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Jesszorzon/ProyectoFinalZorzon.git
```

Ingresar a la carpeta del proyecto:

```bash
cd ProyectoFinalZorzon
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

---

# Configuración de Firebase

La aplicación utiliza Firebase Firestore como base de datos.

Para ejecutar el proyecto desde cero es necesario:

- Crear un proyecto en Firebase.
- Crear una base de datos Cloud Firestore.
- Configurar el archivo:

```
src/firebase/config.js
```

con las credenciales del nuevo proyecto.

Luego crear la colección:

```
products
```

con los productos correspondientes.

---

# Estructura del proyecto

```
src
│
├── components
├── context
├── firebase
├── services
├── App.jsx
└── main.jsx

public
│
├── logo.jpeg
└── productos
```

---

# Funcionalidades implementadas

✔ Catálogo de productos.

✔ Filtrado por categorías.

✔ Detalle del producto.

✔ Carrito de compras.

✔ Context API.

✔ Checkout.

✔ Generación de órdenes.

✔ Actualización automática del stock.

✔ Firebase Firestore.

✔ React Router DOM.

---

# Deploy

https://navega-las-rutas-zorzon.vercel.app/

---

# Repositorio

https://github.com/Jesszorzon/ProyectoFinalZorzon

---

# Autora

**Jesica Zorzon**

Proyecto Final - React JS

Coderhouse