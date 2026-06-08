# Mugiwara Dex 🏴‍☠️⚓

Aplicación de React hecha como actividad de aprendizaje (3) que utiliza los siguientes conceptos de React:
- Contenedor / Presentacional
- Context API
- Higher-Order Components (HOCs)
- Render Props
- Custom Hooks
- Code Splitting

El usuario elige su bando (Pirata o Marino) y la aplicación cambia su comportamiento y estética a partir de él (Es la idea xd).
Muestra cards con los integrantes de la tripulación con información y acciones diferentes según el bando.

## Estructura de Carpetas

src/
├── components/
│   ├── AbilityList.jsx
│   ├── Button.jsx
│   ├── CharacterCard.jsx
│   ├── CharacterDetails.jsx
│   ├── Layout.jsx
│   ├── LoginView.jsx
│   ├── Modal.jsx
│   ├── NavButton.jsx
│   ├── Navbar.jsx
│   └── WeaknessList.jsx
├── containers/
│   └── CharacterListContainer.jsx
├── context/
│   ├── SessionContext.js
│   └── SessionProvider.jsx
├── hocs/
│   └── withSession.jsx
├── hooks/
│   ├── useFetch.js
│   └── useSession.js
├── pages/
│   ├── AboutPage.jsx
│   ├── HomePage.jsx
│   └── LoginPage.jsx
├── services/
│   ├── api.js
│   └── characters.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx

## Conceptos Implementados

### 1. Context API

Hice un `SessionContext` que funciona como la fuente de verdad del estado de sesión. Este context guarda si el usuario eligió el bando pirata o marino (`session`), y utiliza dos funciones: `startSession` para iniciar la sesión con un bando elegido y `endSession` para cerrarla.

Un `SessionProvider` cubre toda la aplicación, lo que permite que cualquier componente pueda saber en qué bando está el usuario sin necesidad de que ese dato se pase como prop. Esto se aprovecha para aplicar una clase CSS diferente en la raíz de la app y cambiar la paleta de colores según el bando.

### 2. Contenedor / Presentacional

La aplicación divide la lógica de la visualización en partes:

#### Autenticación:
Las funciones de `LoginPage`: Es un contenedor que accede y se encarga de iniciar la sesión a través del `SessionContext` y de pasar esos handlers como props. `LoginView` es el presentational que sólo dibuja el UI y llama a las funciones de las props.

#### Lista de Personajes (Mugiwara Dex):
`CharacterListContainer` es un contenedor que llama a los hooks para conseguir datos, maneja el estado local del modal, e inyecta la configuración visual (`actionConfig`) a las tarjetas sin mezclarse con JSX complejo.
`CharacterCard` es el presentacional. Recibe los datos y los dibuja en un grid, confiando en las props inyectadas por el contenedor para saber qué botón o texto mostrar.

### 3. Higher-Order Components (HOCs)

`withSession` es una función que recibe un componente y devuelve uno nuevo con lógica adicional inyectada. En este caso, actúa como un "guardia" de autorización:
- Intercepta el renderizado accediendo al estado con `useSession`.
- Si el usuario **no tiene una sesión activa**, bloquea la visualización del componente original y en su lugar muestra una pantalla de "Acceso Denegado".
- Si el usuario **sí tiene sesión**, renderiza el componente original pasándole intactas todas sus propiedades (`<WrappedComponent {...props} />`).

Este patrón se usa actualmente para envolver y proteger `HomePage` y `AboutPage`. Su mayor ventaja es que nos permite agregar esta capa de seguridad a cualquier pantalla de la app sin tener que escribir la lógica de validación de sesión dentro de cada página.

### 4. Custom Hooks

`useSession` Devuelve el valor de `session` del `SessionContext` y las funciones para el manejo del estado de sesión. Haciendo que este sea accesible por cualquier componente hijo del SessionProvider.
`useFetch` Maneja la lógica de los datos de los personajes. Realiza la petición a la API de forma asíncrona simulada y devuelve los datos, el estado de carga y cualquier error.

### 5. Render Props

Implementado en el componente `CharacterDetails` y utilizado por el `CharacterListContainer`. `CharacterDetails` pinta la cabecera estándar de un tripulante (foto, nombre y rol) y luego ejecuta una función recibida a través de la prop `render(character)`. Esto permite que el componente padre decida de forma dinámica qué contenido inyectar en la parte inferior del modal (la lista de habilidades o debilidades) haciéndolo extremadamente reutilizable.

### 6. Code Splitting

El Code Splitting fue implementado mediante `React.lazy` y `<Suspense>` para optimizar la carga inicial de la aplicación. Lo aplicamos de forma global en `App.jsx` para la página `AboutPage` (asegurando que su código solo se descargue al navegar a ella), y a nivel de componente en `CharacterListContainer.jsx` para cargar de forma perezosa las listas de detalles (`AbilityList` y `WeaknessList`) dentro del modal. Esto sirve para reducir el tamaño de la carga inicial y mejora los tiempos de respuesta de la interfaz.


