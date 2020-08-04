const mongoose = require('mongoose');
const { Schema } = mongoose;

var Reclamos = new Schema({
    atencion_id: {type: Number},
    servicio_id: {type: Number},
    operador_id: {type: Number},
    estado: {type: String},
    prioridad: {type: String}
})


var Reclamo_Cliente = new Schema({
    _id: {type: Number},
    cliente_id: {type: Number},
    reclamos: [Reclamos]
});


module.exports = mongoose.model('Reclamo_Cliente', Reclamo_Cliente);