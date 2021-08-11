var mongoose = require('mongoose')
var dotenv = require('dotenv').config()


// var dburi = process.env.MONGOOSE_DB
var dburi = "mongodb+srv://zubairabc:zubairabc@cluster0.j83vk.mongodb.net/parkingapp?retryWrites=true&w=majority"
mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })


mongoose.connection.on('connected', function () {
    console.log("mongoose is connected")
})
mongoose.connection.on('disconnects', function () {
    console.log("mongoose is disconnected")
    process.exit(1)
})
mongoose.connection.on('error', function () {
    console.log("mongoose is an arror")
    process.exit(1)
})
mongoose.connection.on('SIGNIT', function () {
    console.log("app is turminating")
    mongoose.connection.close(function () {
        console.log("moongoose default connection closed")
        process.exit(1)
    })

})

var costumerSignup = new mongoose.Schema({
    usrname: String,
    useremail: String,
    userphone: String,
    userpassword: String,
    role: { type: String, "default": "student" },
    createdOn: { type: Date, 'default': Date.now },
    activeSince: Date

})
var costumerModel = mongoose.model("costumer", costumerSignup)


var bookingModelSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userPhone: String,
    slot: String,
    location: String,
    startDateTime: Date,
    endDateTime: Date
})

var bookingModel = mongoose.model("slotBooking", bookingModelSchema)

module.exports = {
    costumerModel: costumerModel,
    bookingModel: bookingModel
}