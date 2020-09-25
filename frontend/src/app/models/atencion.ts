export class Atencion{
    _id: String;
    cliente_id: String;
    cliente_dni:String;
    atencion_servicio: {
        servicio_id: String;
        usuario_id: String
        descripcion: String;
        fecha_atencion: String;
        precio_servicio: Number;
        duracion_servicio: String;
        
    };
    atencion_reclamo: {
        servicio_id: String;
        usuario_id: String
        descripcion: String;
        fecha_atencion: String;
        prioridad: Number;
        estado: String;
    };

}