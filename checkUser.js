var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/loony")
var User = require("./models/User.js").User

var first_user = new User({
    username: "Vasya",
    password: "qwerty"
})

first_user.save(function(err,user){
    if(err) throw err
    console.log(user)
})
