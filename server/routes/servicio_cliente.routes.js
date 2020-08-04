const express = require('express');
const router = express.Router();

//Controladores
const servicio_clienteCtrl = require('../controllers/servicio_cliente.controller');

//Rutas
router.get('/',servicio_clienteCtrl.get_servicios_clientes);
router.post('/',servicio_clienteCtrl.registrar_servicio_cliente);

module.exports = router; 