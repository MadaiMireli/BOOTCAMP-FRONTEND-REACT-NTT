# Mini Market VIVA NATURA

Este proyecto es un pequeño marketplace que incluye:

- Barra de búsqueda responsiva.
- Sección de productos con información detallada.
- Carrito de compras.

- La estructura es simple, un archivo para la estructura, otro para los estilos, se utiliza iconos de google.
- Se usó Flexbox para el responsive.

feature/javascript

- Para consumir las apis se usaron fetch, promesas con async y await.
- Se trabajó con clases, programacion funcional y POO.
- Uso de LocalStorage para almacenar en el navegador los productos agregados al carrito.
- Búsqueda sensitiva por productos y filtros por categorías.

feature/typescript
- Se usó Vite para empaquetar el ts al js.
- Para ejecutar el proyecto usar: npm run dev
- Se migró de js a ts.

featuere/react-fundamentos
- Consumo de Apis con fetch, promesas con async-await.
- Se migró el proyecto de ts a Componentes de React.
- Uso de Context y Reducer para manejar los estados y cambios entre componentes.
- Para ejecutar el proyecto usar: npm run dev.
- Agregar la ruta de la Api base en el archivo .env.template para el consumo de apis.

feature/react-implementacion

- Se agregó el json de distritos de Lima.
- Para la navegación se usa react router y dom. 
- Uso de Layout para intercambiar el contenido en Outlet, Header y Footer son fijos.
- Se está usando 2 reducer( product y cart), para poder manejar ambos combineReducers.
- Para tener los cambios o dependencia agregada, ejecutar el comando: npm i
- Para ejecutar el proyecto usar: npm run dev.
- Validaciones en el form, para celular solo numeros; nombres y apellidos solo letras.

feature/proyecto-integrador
- Implementación del login.
- HOC(validar la autenticación para ingresar al market.)
- Uso de vertical Slicing y Screaming Architecture para escalar y mantener el código.