const {Schema, model} = require("mongoose")

const Post = new Schema ({
    authorId: {type: String},
    text: {type: String},
    time: {type: String},
    date: {type: String},
    likedBy: [{type: String}],
    likesCount: {type: Number}

})

module.exports = model('Post', Post)