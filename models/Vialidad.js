const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Poli = new Schema({
    nombre: String,
    matricula: String,
    password: {
        type: String,
        required: true
    }
});


module.exports = Vialidad = mongoose.model('poli', Poli);