npm init

npm install --save typescript

Update package.json to update tsc compiler to look like
"scripts": {
    "tsc": "tsc"
  }

Generate tsconfig.json using command
npm run tsc -- --init

Update tsconfig to redirect output to build directory
"outDir": "./build",

As we will be using Express and ES2015 syntax. We need to install the es6-shim, and express typings. 
npm install --save @types/express @types/es6-shim

Install express
npm install --save express

Make a folder called app and add a server.ts file.
mkdir app 
cd app
touch server.ts  // On windows, manually create this file

Create a folder called controllers inside app folder and add index.ts and car.controller.ts files.
mkdir controllers
cd controllers
touch index.ts welcome.controller.ts // On windows, manually create these files

To compile
npm run tsc

To run 
node ./build/server.js
