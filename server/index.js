const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database')

// Setting 
app.set('port', process.env.PORT || 3000);
// Middleware
app.use(morgan('dev'));
//para poder usar los req.body
app.use(express.json());

//Routes
app.use('/api/clientes',require('./routes/cliente.routes'));
app.use('/api/servicios',require('./routes/servicio.routes'));
app.use('/api/operadores',require('./routes/operador.routes'));
app.use('/api/servicios_cliente',require('./routes/servicio_cliente.routes'));

//Starting the Server 
app.listen( app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});