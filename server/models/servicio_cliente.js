const mongoose = require('mongoose');
const { Schema } = mongoose;


var Servicio_Cliente = new Schema({
    cliente_id: {type: String},
    cliente_dni: {type: String},
    servicios: [{
                    servicio_id: {type: Number},
                    operador_id: {type: Number},
                    estado: {type: String},
                    monto_mensual: {type: Number}
                }]
});



module.exports = mongoose.model('Servicio_Cliente', Servicio_Cliente);

