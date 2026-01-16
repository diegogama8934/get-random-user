# Prueba Técnica Frontend – React Random User

## Descripción
Esta aplicación web fue desarrollada como prueba técnica para evaluar habilidades en React, consumo de APIs y presentación visual.  
La app consume la API pública de https://randomuser.me/api/ y muestra información básica de un usuario aleatorio.

Al cargar la aplicación se obtiene un usuario inicial y, mediante un botón, el usuario puede solicitar nuevos perfiles de forma manual.

---

## Qué se hizo

- Consumo de la API pública **Random User** utilizando `fetch`.
- Implementación de un **custom hook (`useRandomUser`)** para encapsular:
  - Lógica de petición
  - Manejo de estados (`loading`, `error`, `user`)
  - Reutilización y separación de responsabilidades.
- Manejo de estado de carga con un **indicador visual**.
- Manejo de errores mostrando un **componente de error** en caso de fallo en la petición.
- Implementación de **notificaciones** usando `react-toastify` para mejorar la experiencia de usuario.
- Interfaz simple y ordenada usando **TailwindCSS**.
- Estructura del proyecto separada por:
  - `components`
  - `pages`
  - `hooks`
  - `services`
  - `helpers`

---

## Decisiones técnicas

- Se utilizó un **custom hook** para evitar lógica de negocio dentro de los componentes de UI.
- El `ToastContainer` se colocó de forma global para evitar problemas de desmontaje de componentes.
- La petición inicial se realiza en un `useEffect` para cargar datos al montar la aplicación.
- La lógica de consumo de API se separó en un servicio (`getRandomUser`) para mantener el código desacoplado y fácil de escalar.

---

## Posibles mejoras

- Extraer la lógica de notificaciones a una capa más desacoplada.
- Optimizar la experiencia visual con animaciones suaves en los estados de carga.
- Refactorizar el custom hook `useRandomUser` para unificar el manejo de respuestas de la API y reducir duplicación de lógica.

---

## Tecnologías utilizadas

- React
- TypeScript
- TailwindCSS
- React Toastify
- Fetch API

---

## Instalación y ejecución

```bash
npm install
npm run dev
