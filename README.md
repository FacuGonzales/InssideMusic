# InssideMusic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## INSTALAR DEPENDENCIAS

Run `npm install`. Nos permitira instalar todas las dependencias necesarias del proyecto.

## CORRER APLICACION

Run `npm start`. Nos levantara nuestra aplicacion en el puerto 4200 automáticamente, sin necesidad de navegar hasta el.

## CORRER TESTING CYPRESS ::

Antes de ejecutar cypress debemos asegurarnos de tener nuestro proyecto corriendo (npm start).
Luego es necesario renovar el token para poder correr los test correctamente, para esto, debemos ir
al archivo `command.js`, el mismo se encuentra ubicado en [cypress/support/commands.js].
Una vez allí, debemos modificar el contenido de la variable `token`, por el que tenemos acutalmente
almacenado en nuestro LocalStorage.
Una vez realizado estos pasos procedemos a correr cypress.

Run `npm run e2e`

## USER y PASSWORD

Estos es el usuario y password que nos permitira loguearnos correctamente en nuestra aplicación.

user : `test`
pass : `1234`
