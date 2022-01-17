const config = require('config')
const User = require('../models/User')
const Uuid = require('uuid')
const fs = require('fs')
const Post = require("../models/Post");

class FileController {
    async uploadAvatar(req, res) {
        try {
            const file = req.files.file
            const user = await User.findById(req.user.id)
            const avatarName = Uuid.v4() + ".jpeg"
            await file.mv(config.get('staticPath') + "\\" + avatarName)
            user.photo = avatarName
            await user.save()
            return res.json(
                {
                    resultCode: "0",
                    message: "Photo changed successfully",
                    photo: user.photo
                }
            )
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Upload error"})
        }
    }

    async deleteAvatar(req, res) {
        try {
            const user = await User.findById(req.user.id)
            fs.unlinkSync(config.get('staticPath')+ "\\" + user.photo)
            user.photo = "";
            await user.save()
            return res.json(
                {
                    resultCode: "0",
                    message: "Photo removed successfully",
                    photo: user.photo
                }
            )
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Upload avatar error'})
        }
    }

    async addPost(req, res) {
        try {
            const postText = req.body.text;
            const user = await User.findById(req.user.id)
            let Data = new Date();
            let Month = Data.getMonth();
            let Day = Data.getDate();
            let Hour = Data.getHours();
            let Minutes = Data.getMinutes();
            let postDate = Day + "." + Month + 1;
            let postTime = Hour + ":" + Minutes;
            let photo = "none";



            const authorId = user.id;
            const text = postText;
            const time = postTime;
            const date = postDate;
            const likedBy = [];
            const likesCount = 0;

            if(req.files) {
                const file = req.files.file
                photo = Uuid.v4() + ".jpeg"
                await file.mv(config.get('staticPath') + "\\" + photo)
            }
            console.log(authorId, text, time, date, photo, likedBy, likesCount)
            const post = new Post({authorId, text, time, date, photo, likedBy, likesCount})
            console.log(post)
            await post.save()
            let posts = await Post.find({'authorId': `${user.id}`}).sort({_id:-1});
            return res.json({
                resultCode: "0",
                posts
            })
        } catch (e) {
            console.log(e);
            req.send({message: `${e}`})
        }
    }

}

module.exports = new FileController()