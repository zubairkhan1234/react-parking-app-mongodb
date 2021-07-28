var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var path = require('path');
var cors = require('cors');
var AuthRoutes = require('../AuthRoutes/serverAutRoutes')
var PORT = process.env.PORT || 5000

var app = express()
app.use(express())
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json())
app.use(bodyParser.json())

app.use('/', express.static(path.resolve(path.join(__dirname, "../prking-app/build"))));
app.use('/', AuthRoutes)

app.listen(PORT, (() => {
    console.log(`Port is lisning on ${PORT}`)
}))