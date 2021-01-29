# InssideMusic

Este proyecto es una app de música, la cual, mediante un login, ingresamos al home, donde podremos ver
las ultimas novedades de lanzamientos, y un top de más escuchados, el mismo podrá ser filtrado por cuantos
resultados deseamos ver.
Luego podremos encontrar secciones como 'Favoritos', donde se mostrarán todos los tracks, albums, y artistas
que hayamos marcado como nuestros favoritos.
Seccion 'Search', aqui podremos buscar un artista/track/album mediante su nombre, o por palabras claves.
Seccion 'Information', dentro de esta seccion veremos toda la informacion de un artista/album/track.

InssideMusic fue desarrollado utilizando Angular en su versión 11.1.1.

## INSTALAR DEPENDENCIAS

Run `npm install`. Nos permitira instalar todas las dependencias necesarias del proyecto.

## CORRER APLICACION

Run `npm start`. Nos levantara nuestra aplicacion en el puerto 4200 automáticamente, sin necesidad de navegar hasta
`http://localhost:4200/`.

## CORRER TESTING CYPRESS

Antes de ejecutar cypress debemos asegurarnos de tener nuestro proyecto corriendo (npm start).
Luego es necesario renovar el token para poder correr los test correctamente, para esto, debemos ir
al archivo `command.js`, el mismo se encuentra ubicado en [cypress/support/commands.js].
Una vez allí, debemos modificar el contenido de la variable `token`, por el que tenemos acutalmente
almacenado en nuestro LocalStorage de `http://localhost:4200/`.
Una vez realizado estos pasos procedemos a correr cypress.

Run `npm run e2e`.

## USER y PASSWORD

Estos es el usuario y password que nos permitira loguearnos correctamente en nuestra aplicación.

user : `test`
pass : `1234`

## BRANCH PRODUCCION

En esta rama ubicada dentro de nuestro repositorio, se encuentra desplegado el proyecto en Netlify.
Una vez veerificado los cambios, y corroborar que la app compila correctamente dentro de `master`,
nos situaremos dentro de `PRODUCCION` y haremos un merge para obtener los ultimos cambios de `master`.
Una vez realizado esto procedemos al deploy.

Run `ng build --prod`
Run `netlify deploy --prod`
