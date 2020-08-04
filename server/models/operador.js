const mongoose = require('mongoose');
const { Schema } = mongoose; 


const OperadorSchema =  new Schema({
    dni: {type: String, required: true},
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    contraseña: {type: String,required: true},
    correo: { type: String} 
})

module.exports =  mongoose.model('Operador', OperadorSchema)











