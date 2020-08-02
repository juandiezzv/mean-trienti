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

//Starting the Server 
app.listen( app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});