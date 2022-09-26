# zomato-mern-clone-10567
Node js
### create project
 - npm init -y
### install dependancy
 - npm i express mongoose dotenv
### install dev dependancy
 - npm install --save-dev nodemon @babel/cli @babel/core @babel/preset-env @babel/node  (bable used for the Es6 features)
 - create file inside server (.babelrc) and paste the value from https://www.freecodecamp.org/news/setup-babel-in-nodejs/
 - create index.js file
### edit script
 - "scripts": {
 -  "build": "babel index.js -d dist",
 -  "start":"npm run build && node dist/index.js",
 -  "dev": "nodemon --exec babel-node index.js"
 - },
### create database folder
 - create connection .js (and connect with index.js)
 - create all schemas (food, image, menu,order, restaurant, review, user)
 - create allModels.js and export all schemas

