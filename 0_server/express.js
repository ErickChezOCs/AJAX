// avant A- se connecter à la base de données
const dotenv = require('dotenv');
const connectDB = require('./config/db');
 

dotenv.config({path : './config/config.env'});
connectDB();


// A- importer express dans le fichier principal de l'application
const express = require('express');
const dogRouter = require('./api/router');
const cors = require('cors');

// B- initialiser notre application express dans le projet nodejs en créant un objet express appelé app
// la constante app est donc un objet express qui nous permet d'invoquer toutes les méthodes des objets express
const app = express();

// C- initialiser le port d'écoute et le nom d'hôte pour notre application
const hostname = '127.0.0.1';
const port = 4200;

// D- créér notre serveur avec la méthode listen de l'objet express app
 app.listen(port,hostname,() => {
    console.log(`Le serveur express tourne à l'adresse http://${hostname}:${port}`);
 });

// G- créer des routes avec la méthode use de notre objet express app
// ****************ROUTES***********//
// app.use()
// H - Pour pouvoir lire dans le corps des requête http, on doit appeller
// la methode urlencoded de l'objet express app
 
app.use(cors({
  origin: "http://127.0.0.1:5500"
}));
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', dogRouter);

// ****************ROUTES***********//
 // E- créér un endpoint de test pour servir une page web par défaut
 // la route de base est localhost:4200/api

 app.get('/',(req,res,next) => {
   res.send(`Notre serveur Node.js est lancé et tourne bien`);
 });

 // F- lancer le serveur dans la console : node express
 // on devrait voir le message de la console et à l'adresse localhost:3000 le message Notre serveur
 
 



