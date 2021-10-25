const {Schema, model} = require("mongoose")

const User = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true},
    name: {type: String, required:true},
    photo:{type: String},
    status:{type: String},
    following:[{type: "Number"}],
    followers:[{type: "Number"}],
    github:{type: String},
    facebook:{type: String},
    linkedin:{type: String},
    instagram:{type: String},
})

module.exports = model('User', User)