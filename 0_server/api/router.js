// on importe toujours express car le routeur est founit par express
const express = require('express');
const router = express.Router();

// maintenant qu'on dispose de l'objet router on peut créer des endpoints pour notre application
// la route de base est localhost:3000/api/

/********Appeler le controller qui contient le model ici */
const catCtrl = require('../controllers/cat')

// créons quelques données pour simuler un serveur
let dogs = [
    {
        id:'1',
        name: 'Skinny',
        age: 1,
        gender:'Female',
        notes : 'broken front leg'
    },
    {
        id:'2',
        name: 'Charm',
        age: 2,
        gender:'Male',
        notes : 'so much funny dog'
    }
];

let cats = [
    {
        id:0,
        name:'Micky',
        age:'3',
        gender:'Male',
        notes:'the one you will always remenber'
    },
    {
        id:3,
        name:'Starry',
        age:'3',
        gender:'Female',
        notes:'so bright like a star'
    }
];

// créer une fonction de géneration

//***** GET DOGS */
router.get('/dogs' , (req,res,next) => {
    console.log(`GET request received at ${ new Date().toLocaleTimeString()}`);
    res.json({dogs});
})



//***** POST DOGS */
router.post('/dogs', (req,res,next) => {
    let newDog = {
        id: req.body.id,
        name: req.body.name,
        age:req.body.age,
        gender: req.body.gender,
        notes:req.body.notes
    };
    dogs.push(newDog);
    console.log(`POST request received at ${ new Date().toLocaleTimeString()}`);
    res.json({message:'POST request was successful', newDogAdded:newDog});
})


router.get('/cats',(catCtrl.getAllCats)); 

router.post('/cats', catCtrl.createCat);

//***** PUT/UPDATE DOGS */
router.put('/dogs/:id',(req,res,next) => {
    let dogId = req.params.id;

    let updatedDog = {
        id:dogId,
        name: req.body.name,
        age:req.body.age,
        gender: req.body.gender,
        notes:req.body.notes
    }
    // first step
    let existingDog = dogs.find((dog) =>{
        return dog.id === dogId;
    });
    // second step : replace the existing dog with the updatedDog
    dogs.splice(dogs.indexOf(existingDog), 1, updatedDog);
    //confirmation
    console.log(`PUT request received at ${ new Date().toLocaleTimeString()}`);
    res.json({message:'PUT request was successful'});
})

//***** DELETE DOGS */
router.delete('/dogs/:id',(req,res,next) =>{
    let dogId = req.params.id;
    dogs = dogs.filter( (dog) =>{
        return dog.id !== dogId;
    })
    //confirmation
    console.log(`DELETE request received at ${ new Date().toLocaleTimeString()}`);
    res.json({message:'DEL request was successful'});
})




//  on doit exporter nos routes afin de les utiliser dans notre fichier principal 
// l'objet router est le module à exporter
module.exports = router;