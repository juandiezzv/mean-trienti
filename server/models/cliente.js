const mongoose = require('mongoose');
const {Schema} = mongoose; 

const ClienteSchema =  new Schema({
    dni: { type: String, required: true},
    nombre: { type: String, required: true },  
    apellido: {type: String, required: true }, 
    sexo: {type: String},
    prioridad: {type: String}
});

module.exports = mongoose.model('Cliente', ClienteSchema);