//Librerias para el login
const passport = require('passport')

//Librerias para que funcione Express y Mongodb
const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./config/database')
const path = require('path');
const cors = require('cors')


// Setting 
app.set('port', process.env.PORT || 3000);
// Middleware
app.use(morgan('dev'));

app.use(cors());

//para poder usar los req.body
app.use(express.json());

//Midleware para Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


//Set Static Folder
app.use(express.static(path.join(__dirname,'../public')));

// app.use('*', (req,res) =>{
//     // res.sendFile(path.join(__dirname,'../public/index.html'))
// });

//Routes
app.use('/api/clientes',require('./routes/cliente.routes'));
app.use('/api/servicios',require('./routes/servicio.routes'));
app.use('/api/operadores',require('./routes/operador.routes'));
app.use('/api/servicios_cliente',require('./routes/servicio_cliente.routes'));
app.use('/api/reclamos_cliente',require('./routes/reclamo_cliente.routes'));
app.use('/usuarios',require('./routes/usuario.routes'));

//Starting the Server 
app.listen( app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});