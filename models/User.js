const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let profilePic = new Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalName: {
        type: String,
        required: true
    }
});


let User = new Schema({
    nombre: String,
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    autos: [{
        modelo: String,
        color: String,
        placas: {
            type: String,
            required: true
        }
    }],
    profilePic,
    parkoins: {
        type: Number,
        default: 0
    }
});

module.exports = Usuario = mongoose.model('user', User);