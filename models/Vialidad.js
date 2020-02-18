//Modelo de la base de datos para los administradores
//ASAEL DAVID CERROS DOMINGUEZ
//CARLOS EDUARDO ORTEGA QUINTANA
//OSCAR ALEJANDRO FLORES HERMOSILLO
//FRANCISCO QUINTANA SALAZAR

const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Poli = new Schema({//Con este esquema se registran a los administradores (Vialidades)
    nombre: String,
    matricula: String,
    password: {
        type: String,
        required: true
    }
});


module.exports = Vialidad = mongoose.model('poli', Poli);