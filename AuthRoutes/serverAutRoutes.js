var express = require('express');
var bcrypt = require('bcrypt-inzi');
var jwt = require('jsonwebtoken');
var { costumerModel } = require('../dbsmodel/dbsModel')
var SERVER_SECRET = process.env.SERVER_SECRET || "1234"
console.log(costumerModel)
var api = express.Router()

api.use('/signup', (req, res, next) => {
    console.log(req.body.userName)
    console.log(req.body.userPhone)
    console.log(req.body.userPassword)
    console.log(req.body.userEmail)

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
    costumerModel.findOne({ useremail: req.body.userEmail }, function (err, costumers) {
        
        if (err) {
            console.log(err)
            console.log( "This is costumer ", costumers)
        } else if (!costumers) {
            bcrypt.stringToHash(req.body.userPassword).then(function (hashPassword) {

                var newCostumer = new costumerModel({
                    username: req.body.userName,
                    useremail: req.body.userEmail,
                    userphone: req.body.userPhone,
                    userpassword: hashPassword
                })

                newCostumer.save((err, data) => {
                    if (!err) {
                        res.status(200).send({
                            message: 'SignUp has been successfully'
                        })
                    } else {
                        res.send({
                            message: 'User already created',
                            status : 403
                        })
                    }
                })

            })
        } else if (err) {
            res.status(500).send({
                message: "db error"
            })
        } else {

            res.send({
                message: "User already exist",
                status : 403
            })
        }
    })
})


api.post('/login', (req, res, next) => {

    console.log(req.body.userPassword)
    console.log(req.body.userEmail)

    if (!req.body.userPassword
        || !req.body.userEmail) {
        res.status(403).send(`
            Please Provide complete information like(
                {
                    userEmail: "zubair@gmail.com,
                    userPassword: "zubair,
                }
            )
            `)
        return
    }

    costumerModel.findOne({ useremail: req.body.userEmail }, function (err, loginCostumer) {

        if (err) {
            res.status(500).send({
                message: 'an errer occured'
            })
            console.log(err)
        } else if (loginCostumer) {

            console.log(loginCostumer)

            bcrypt.varifyHash(req.body.userPassword, loginCostumer.userpassword).then((match) => {

                if (match) {

                    var token = jwt.sign({
                        name: loginCostumer.username,
                        email: loginCostumer.useremail,
                        phone: loginCostumer.userphone,
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
                            name: loginCostumer.username,
                            email: loginCostumer.useremail,
                            phone: loginCostumer.userphone,

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


