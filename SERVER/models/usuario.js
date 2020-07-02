
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let listaValida = {
    values: ['USER_ROLE', 'ADMIN_ROLE'],
    message: '{VALUE} no es un role correcto'
}

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        requiere: [true, "El nombre es necesario"]
    },
    email: {
        type: String,
        unique: true,
        requiere: [true, "El email es necesario"]
    },
    password: {
        type: String,
        requiere: [true, "El password es obligatorio"]
    },
    img: {
        type: String,
        requiere: false
    },
    role: {
        type: String,
        requiere: [true, "El role es obligatorio"],
        default: 'USER_ROLE',
        enum: listaValida
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    } 
});

usuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    
    return userObject;
};

usuarioSchema.plugin(uniqueValidator, {message: '{PATH} debe ser único'});

module.exports = mongoose.model("Usuario", usuarioSchema);