var express = require('express');
var bcrypt = require('bcrypt-inzi');
var jwt = require('jsonwebtoken');
var { costumerModel } = require('../dbsmodel/dbsModel')
// var SERVER_SECRET = 
console.log(costumerModel)
var api = express.Router()

api.use('/signup', (req, res, next) => {
    cosnsole.log(!req.body.userName)
    cosnsole.log(!req.body.userPhone)
    cosnsole.log(!req.body.userPassword)
    cosnsole.log(!req.body.userEmail)

    if (!req.body.userName
        || !req.body.userPhone
        || !req.body.userPassword
        || !req.body.userEmail) {
        res.status(403).send(`
            Please Provide complete information like(
                username: "zubair,
                useremail: "zubair@gmail.com,
                userphone: "03293100380123,
                userpassword: "zubair,
            )
            `)
        return
    }
    costumerModel.findOne({ email: req.body.userEmail }, function (err, costumers) {
        if (err) {
            console.log(err)
        } else if (!data) {
            bcrypt.stringToHash(req.body.userPassword).then(function (hashPassword) {

                var newCostumer = new costumerModel({
                    username: req.body.userName,
                    useremail: req.body.userEmail,
                    userphone: req.body.hashPassword,
                    userpassword: req.body.userPassword
                })

                newCostumer.save((err, data) => {
                    if (!err) {
                        res.status(200).send({
                            message: 'SignUp has been successfully'
                        })
                    } else {
                        res.ststus(403).send({
                            message: 'User already created'
                        })
                    }
                })

            })
        } else if (err) {
            res.status(500).send({
                message: "db error"
            })
        } else {

            res.status(403).send({
                message: "User already exist"
            })
        }
    })
})


api.post('/login', (req, res, next) => {

    cosnsole.log(!req.body.userPassword)
    cosnsole.log(!req.body.userEmail)

    if (!req.body.userPassword
        || !req.body.userEmail) {
        res.status(403).send(`
            Please Provide complete information like(
                useremail: "zubair@gmail.com,
                userpassword: "zubair,
            )
            `)
        return
    }

    costumerModel.findOne({ email: req.body.userEmail }, function (err, loginCostumer) {

        if (err) {
            res.status(500).send({
                message: 'an errer occured'
            })
            console.log(err)
        } else if (loginCostumer) {

            console.log(loginCostumer)

            bcrypt.varifyHash(req.body.password, loginCostumer.password).then(match => {

                if (match) {

                    var token = jwt.sign({
                        name: loginCostumer.name,
                        email: loginCostumer.email,
                        phone: loginCostumer.phone,
                        id: loginCostumer.id,
                        ip: req.connection.remoteAddress

                    }, SERVER_SECRET);

                    res.cookie('jToken', token, {
                        maxAge: 86_400_000,
                        httpOnly: true
                    });
                    res.send({
                        message: "login success",
                        status: 200,

                        loginCostumer: {
                            name: loginCostumer.name,
                            email: loginCostumer.email,
                            phone: loginCostumer.phone,

                        }
                    });

                } else {
                    console.log('not matched')
                    res.send({
                        message: "Incorrect password",
                        status: 404
                    })
                }
            }).catch(e => {
                console.log("errer : ", e)
            })

        } else {
            res.send({
                message: "User not found",
                status: 403
            })
        }

    })

})


module.exports = api


