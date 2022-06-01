const {Schema, model} = require("mongoose")

const Dialogs = new Schema ({
    usersId:[{type:String, required: true}],
    photo:{type: String},
    lastMessage:{type: String},
    lastUpdate:{type: String},
    messages: [{
        authorId: {type: String, required: true},
        date:{type: String},
        time: {type: String},
        text: {type: String},
        photo: {type: String},
        sent: {type: Boolean},
        read: {type: Boolean}
    }],
})

module.exports = model('Dialogs', Dialogs)