const Servicio_Cliente = require('../models/servicio_cliente');
const { query } = require('express');
const serv_clienteCtrl = {};


serv_clienteCtrl.get_servicios_clientes = async (req,res) =>{
    const servicios_clientes = await Servicio_Cliente.find();
    res.json(servicios_clientes);
}

serv_clienteCtrl.registrar_servicio_cliente = async (req, res) =>{
    //Consulta para buscar un cliente por su dni
    var query = {};
    var cliente_dni = "cliente_dni";
    var value = req.body.cliente_dni;
    query[cliente_dni] = value;

    //Verifica si este cliente ya presenta un historial de pedidos
    var servicios_cliente = await Servicio_Cliente.findOne(query);

    if(servicios_cliente){
        res.json({
            "status": "Este cliente ya tiene un registro"
        });

        console.log(servicios_cliente.cliente_dni);
        var servicio = {
                            servicio_id: req.body.servicio_id,
                            operador_id: req.body.operador_id, 
                            estado: req.body.estado, 
                            monto_mensual:req.body.monto_mensual
        }

        Servicio_Cliente.findOneAndUpdate(
            {cliente_dni: servicios_cliente.cliente_dni},
            { $push: { servicios: servicio } },
            function (error, success) {
         if (error) {
            console.log(error);
        }else {
            console.log("Agregado al historial");
        }
    });

    }else{
        const servicio_cliente = new Servicio_Cliente(
            { 
            cliente_dni: req.body.cliente_dni, 
            servicios: {
                servicio_id: req.body.servicio_id,
                operador_id: req.body.operador_id, 
                estado: req.body.estado, 
                monto_mensual:req.body.monto_mensual
            }
         });
         await servicio_cliente.save().then(
            res.json({
                'status':'Servicio registrado'
            })
         );


    }

}

module.exports = serv_clienteCtrl;