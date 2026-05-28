<h1 align="center">🛒 blancnoir</h1>
<p align="center">
  <strong>E-commerce de tecnología · React 19 · Firebase · Tailwind CSS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-12.8.0-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-7.12.0-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />
</p>

<p align="center">
  <a href="https://blancnoir.netlify.app/" target="_blank"><strong>🔗 Ver demo en vivo</strong></a>
</p>

---

## Descripción

**blancnoir** es una aplicación web de e-commerce para productos de tecnología, desarrollada como proyecto final del curso de React en CoderHouse. Implementa un flujo de compra completo: catálogo, detalle de producto, carrito y checkout con generación de órdenes en Firebase Firestore.

El diseño sigue una estética minimalista en blanco y negro, con foco en la claridad y la experiencia de usuario.

---

## Funcionalidades

| Área | Detalle |
|------|---------|
| Catálogo | Listado de productos con filtrado por categoría |
| Detalle | Vista individual con descripción, precio y stock disponible |
| Carrito | Agregar, eliminar y vaciar productos; cálculo de total en tiempo real |
| Checkout | Formulario con validación, creación de orden en Firestore y confirmación con ID |
| UI/UX | Responsive design, loaders, mensajes de error y carrito vacío |
| Backend | Firebase Firestore para productos y órdenes; fallback a datos mock |

**Categorías disponibles:** Consolas · Celulares · Televisores · Computadoras

---

## Tecnologías

- **React 19** con Context API para estado global del carrito
- **React Router DOM 7** para navegación SPA
- **Firebase 12** (Firestore) como base de datos en la nube
- **Vite 7** como build tool y servidor de desarrollo
- **Tailwind CSS 4** para estilos utilitarios
- **ESLint** para calidad de código

---

## Estructura del proyecto

```
src/
├── Components/
│   ├── Navbar.jsx              # Barra de navegación con CartWidget
│   ├── CartWidget.jsx          # Ícono del carrito con contador de ítems
│   ├── ItemListContainer.jsx   # Contenedor del catálogo (fetch + render)
│   ├── ItemList.jsx            # Grid de productos
│   ├── Item.jsx                # Tarjeta individual de producto
│   ├── ItemDetailContainer.jsx # Contenedor del detalle (fetch + render)
│   ├── ItemDetail.jsx          # Vista detallada del producto
│   ├── ItemCount.jsx           # Selector de cantidad con validación de stock
│   ├── Cart.jsx                # Vista del carrito con resumen de compra
│   ├── CartItem.jsx            # Fila individual en el carrito
│   ├── Checkout.jsx            # Formulario de compra y generación de orden
│   └── Button.jsx              # Componente de botón reutilizable
├── context/
│   ├── CartContext.js          # Definición del contexto
│   └── CartProvider.jsx        # Provider con lógica del carrito
├── Firebase/
│   ├── config.js               # Configuración de Firebase
│   └── db.js                   # Funciones para leer/escribir en Firestore
├── services/
│   ├── products.jsx            # Servicio de productos (Firebase + fallback)
│   └── mockProducts.js         # Datos mock para desarrollo offline
├── App.jsx                     # Rutas principales de la aplicación
└── main.jsx                    # Punto de entrada
```

---

## Instalación y uso

### Requisitos

- Node.js 16 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd EcommerceReact

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

> Las credenciales de Firebase ya están incluidas en `src/Firebase/config.js`. Para usar tu propio proyecto, reemplazá la configuración con las credenciales de tu Firebase Console.

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar el build
npm run lint     # Análisis de código con ESLint
```

---

## Configuración de Firebase

Si usás tu propio proyecto de Firebase, creá las siguientes colecciones en Firestore:

**Colección `products`**
```js
{
  name: "Nombre del producto",       // string
  price: 1500,                       // number
  description: "Descripción",        // string
  category: "celulares",             // "consolas" | "celulares" | "televisores" | "computadoras"
  stock: 10,                         // number
  url: "https://url-de-imagen.jpg"   // string
}
```

**Colección `orders`** — se genera automáticamente al completar una compra.

---

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Catálogo completo |
| `/category/:categoryId` | Productos filtrados por categoría |
| `/item/:itemId` | Detalle de producto |
| `/cart` | Carrito de compras |
| `/checkout` | Formulario de finalización de compra |

---

## API del carrito (Context)

```js
addItem(item, quantity)   // Agrega un producto al carrito
removeItem(itemId)        // Elimina un producto por ID
clear()                   // Vacía el carrito
isInCart(itemId)          // Retorna true si el producto ya está en el carrito
getQuantity()             // Retorna la cantidad total de ítems
getTotal()                // Retorna el precio total del carrito
```

---

## Flujo de compra

```
Catálogo → Detalle → Agregar al carrito → Carrito → Checkout → Orden confirmada (ID)
```

1. El usuario navega por el catálogo y filtra por categoría
2. Selecciona un producto, elige cantidad y lo agrega al carrito
3. Desde el carrito puede modificar o eliminar productos
4. Completa el formulario de checkout (nombre, email, teléfono, dirección)
5. Al confirmar, se crea una orden en Firestore y el carrito se vacía
6. Se muestra el ID de orden para seguimiento

---

## Autor

**Marco** — Proyecto Final · Curso de React · CoderHouse
