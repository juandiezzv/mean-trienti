const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Schema} = mongoose; 

var UsuarioSchema = new Schema({
    nombre: {type: String},
    correo: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}

});

const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema);

module.exports.get_UsuarioById = function(id, callback){
   Usuario.findById(id,callback);
}

module.exports.get_UsuarioByUsername = function(username, callback){
    const query = {username: username};
    Usuario.findOne(query,callback);
 }

module.exports.agregarUsuario = function(nuevoUsuario, callback){
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(nuevoUsuario.password, salt, (err,hash) =>{
            if(err) throw err;
            nuevoUsuario.password = hash;
            nuevoUsuario.save(callback);
        });
    });
 }
module.exports.compararPassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,(err,esIgual)=>{
        if(err) throw err;
        callback(null, esIgual);
    });
}
