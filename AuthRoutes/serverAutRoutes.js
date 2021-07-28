var express = require('express');
var bcrypt = require('bcrypt-inzi');
var jwt = require('jsonwebtoken');
var { studentsModle} = require('../dbsmodel/dbsModel')
console.log(studentsModle)
var api = express.Router()



module.exports = api