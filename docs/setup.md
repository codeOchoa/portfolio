Installation:

git bash:
npx create-next-app my-next-app
cd my-next-app

git bash:
npm install bootstrap bootstrap-icons sass aos

GitHub Pages:

Paso 1: Genera el build de tu aplicación React: Si tu aplicación fue creada con create-react-app, ya tiene configurado un script para realizar la tarea de construcción (build). Ejecuta:

yarn build

Paso 2: Instala el paquete gh-pages: Este paquete te ayudará a convertir el código de React en archivos estáticos que GitHub Pages pueda aceptar. Instálalo con:

npm install gh-pages

Paso 3: Crea un script para ejecutar el deploy usando gh-pages: En tu package.json, agrega un nuevo script:

"scripts": {
  "deploy": "gh-pages -d build"
}

Paso 4: Configura la URL de GitHub Pages en package.json: Añade la siguiente línea al mismo archivo:

"homepage": "https://tu-usuario.github.io/nombre-del-repositorio"

Paso 5: Realiza el deploy: Ejecuta el siguiente comando para subir tu aplicación a GitHub Pages:

npm run deploy