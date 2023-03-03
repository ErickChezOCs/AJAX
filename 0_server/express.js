// A- importer express dans le fichier principal de l'application
const express = require('express');

// B- initialiser notre application express dans le projet nodejs
const app = express();

// C- initialiser le port d'écoute et le nom d'hôte pour notre application
const hostname = '127.0.0.1';
const port = 4200;

// D- créér notre serveur
 app.listen(port,hostname,() => {
    console.log(`Le serveur express tourne à l'adresse http://${hostname}:${port}`);
 });

 // E- créér un endpoint de test pour servir une page web par défaut
 app.get('/',(req,res,next) => {
    res.send({message: "Hello World!"});
 });

 // F- lancer le serveur dans la console : node express
 // on devrait voir le message de la console et à l'adresse localhost:3000 le message Notre serveur
