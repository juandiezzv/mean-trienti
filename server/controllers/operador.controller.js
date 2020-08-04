const Operador = require('../models/operador');
const { query } = require('express');
const operadorCtrl = {};

operadorCtrl.get_operadores = async (req,res) => {
    const operadores = await Operador.find();
    res.json(operadores);
}

operadorCtrl.get_operador = async (req,res) => {
    const operador = await Operador.findById(req.params.id);
    res.json(operador)
}

operadorCtrl.create_operador = async (req, res) => {
    const operador = new Operador(req.body);
    await operador.save();
    res.json({
        'status': 'Operador registrado'
    });
}

operadorCtrl.edit_operador = async (req, res )=> {
    const { id } = req.params;
    const operador = {
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña: req.body.contraseña,
        correo: req.body.contraseña
    }
    await Operador.findByIdAndUpdate(id, {$set: operador}, {new: true});
    res.json({status: 'Operador Actualizado'});
}


operadorCtrl.delete_operador = async (req,res)=>{
    const { id } = req.params;
    await Operador.findByIdAndRemove(id);
    res.json({status: 'Operador Eliminado'})
}

module.exports = operadorCtrl;
