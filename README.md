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
│   ├── AboutView.jsx
│   ├── Button.jsx
│   ├── HomeView.jsx
│   ├── Layout.jsx
│   ├── LoginView.jsx
│   ├── NavButton.jsx
│   └── Navbar.jsx
├── context/
│   └── SessionContext.jsx
├── examples/
├── hooks/
├── pages/
│   ├── AboutPage.jsx
│   ├── HomePage.jsx
│   └── LoginPage.jsx
├── services/
├── App.css
├── App.jsx
├── index.css
└── main.jsx

## Conceptos Implementados

### 1. Context API

Hice un `SessionContext` que funciona como la fuente de verdad del estado de sesión. Este context guarda si el usuario eligió el bando pirata o marino (`session`), y utiliza dos funciones: `startSession` para iniciar la sesión con un bando elegido y `endSession` para cerrarla.

Un `SessionProvider` cubre toda la aplicación, lo que permite que cualquier componente pueda saber en qué bando está el usuario sin necesidad de que ese dato se pase como prop. Esto se aprovecha para aplicar una clase CSS diferente en la raíz de la app y cambiar la paleta de colores según el bando.

### 2. Contenedor / Presentacional

La pantalla de inicio de sesión está dividida en dos:

`LoginPage` es el contenedor que accede al `SessionContext` para obtener la función `startSession`, define qué debe pasar cuando el usuario elige un bando (inicia la sesión y te lleva a la página principal) y pasa esos handlers como props al componente visual.

`LoginView` es el presentacional. Solo dibuja la interfaz: el título, el subtítulo y los dos botones de elección. Estos llaman a las funciones que le llegan por props cuando el usuario hace clic.

Esta separación hace que `LoginView` sea un componente reutilizable.
