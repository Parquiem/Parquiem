//Modelo de la base de datos para el usuario
//ASAEL DAVID CERROS DOMINGUEZ
//CARLOS EDUARDO ORTEGA QUINTANA
//OSCAR ALEJANDRO FLORES HERMOSILLO
//FRANCISCO QUINTANA SALAZAR

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let profilePic = new Schema({ //Se guardan las rutas de las imagenes de perfil
    path: {//ruta
        type: String,
        required: true,
        trim: true
    },
    originalName: {//Nombre original
        type: String,
        required: true
    }
});


let UserSchema = new Schema({//Se registran los datos de perfil del usuario
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    car: [{//Se registran los autos que estacionara usando la aplicacion
        carModel: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        plates: {//placas
            type: String,
            required: true
        }
    }],
    profilePic,
    parkoins: {//Moneda virtual que usamos para los pagos
        type: Number,
        default: 0
    },
    purchases: [{//Se registran las compras
        time: {
            type: Date,
            default: Date.now 
        },
        cost: {
            type: Number
        },
        location: {
            type: String
        }
    }]
});

module.exports = User = mongoose.model('users', UserSchema);
module.exports = Images = mongoose.model('images', profilePic);