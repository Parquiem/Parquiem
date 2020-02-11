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


let UserSchema = new Schema({
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
    car: [{
        carModel: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        plates: {
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

module.exports = User = mongoose.model('users', UserSchema);