const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const user = new Schema({
    firstName: {
        type: String,
        required: [true, 'El nombre en necesario']
    },
    lastName: {
        type: String,
        required: [true, 'El apellido es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    photo: {
        type: String,
        required: false
    },
    state: {
        type: String,
        default: true
    }
})

user.methods.toJSON = function () {
    let currentUser = this
    let currentUserObject = currentUser.toObject()
    delete currentUserObject.password

    return currentUserObject
}

user.plugin(uniqueValidator, {
    message: 'Este email ya se encuentra registrado'
})

module.exports = mongoose.model('SignUpUser', user)