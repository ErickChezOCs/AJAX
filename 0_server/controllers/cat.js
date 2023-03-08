const Cat = require('../models/Cat.js');

exports.createCat =  (req,res,next) => {
    delete req.body.id;
    const cat = new Cat({
        ...req.body
    })
    cat.save()
    .then ( ()=> res.status(201).json({message : 'created and saved new cat!' }))
    .catch(error => res.status(400).json({error}));
};

exports.getAllCats =  (req,res,next) => {
    Cat.find()
      .then(cats => res.status(200).json(cats))
      .catch(error => res.status(400).json({error}));
  };