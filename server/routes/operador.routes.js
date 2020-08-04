const express = require('express');
const router = express.Router();

//Controladores
const operadorCtrl = require('../controllers/operador.controller');

//Rutas
router.get('/', operadorCtrl.get_operadores);
router.get('/:id',operadorCtrl.get_operador);
router.post('/',operadorCtrl.create_operador);
router.put('/:id',operadorCtrl.edit_operador);
router.delete('/:id',operadorCtrl.delete_operador);

module.exports = router;