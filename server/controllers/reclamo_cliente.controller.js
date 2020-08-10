const Reclamo_Cliente = require('../models/reclamo_cliente');
const { query } = require('express');
const reclamo_clienteCtrl = {}; 

reclamo_clienteCtrl.get_reclamos_clientes = async (req, res) =>{
    const reclamo_cliente = await Reclamo_Cliente.find();
    res.json(reclamo_cliente);
}


module.exports = reclamo_clienteCtrl; 