const {Schema, model} = require("mongoose")

const Dialogs = new Schema ({
    usersId:[{type:String, required: true}],
    photo:{type: String},
    lastMessage:{type: String},
    messages: [{
        authorId: {type: String, required: true},
        date:{type: String, required: true},
        time: {type: String, required: true},
        text: {type: String , required: true},
        photo: {type: String},
        sent: {type: Boolean},
        read: {type: Boolean}
    }],
})

module.exports = model('Dialogs', Dialogs)