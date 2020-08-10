const express = require('express');
const router = express.Router();

//Controladores 
const reclamo_clienteCtrl = require('../controllers/reclamo_cliente.controller');

//Rutas

router.get('/',reclamo_clienteCtrl.get_reclamos_clientes);



module.exports = router;