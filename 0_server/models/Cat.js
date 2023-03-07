const mongoose = require('mongoose');

const catSchema = mongoose.Schema( {
   
    name: { type: String , require : true },
    age: { type: Number , require : true },
    gender: { type: String , require : true },
    notes: { type: String , require : true }
});

module.exports = mongoose.model('Cat',catSchema);
