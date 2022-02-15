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
            return res.status(400).json({message: "Upload error"})
        }
    }

    async deleteAvatar(req, res) {
        try {
            const user = await User.findById(req.user.id)
            fs.unlinkSync(config.get('staticPath') + "\\" + user.photo)
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
            return res.status(400).json({message: 'Upload avatar error'})
        }
    }

    async addPost(req, res) {
        try {
            const postText = req.body.text;
            const user = await User.findById(req.user.id)
            let Data = new Date();
            let Month = Data.getMonth() + 1;
            let Day = Data.getDate();
            let Hour = Data.getHours();
            let Minutes = Data.getMinutes();
            let postDate = Day + "." + Month;
            let postTime = Hour + ":" + Minutes;
            let photo = "none";


            const authorId = user.id;
            const text = postText;
            const time = postTime;
            const date = postDate;
            const likedBy = [];
            const likesCount = 0;

            if (req.files) {
                const file = req.files.file
                photo = Uuid.v4() + ".jpeg"
                await file.mv(config.get('staticPath') + "\\" + photo)
            }
            const post = new Post({authorId, text, time, date, photo, likedBy, likesCount})
            await post.save()
            let posts = await Post.find({'authorId': `${user.id}`}).sort({_id: -1});

            let newPosts = [];
            let check = {}

            if (!user) {
                return res.statusCode(404).json({
                    message: "User not found"
                })
            }
            posts.map(post => {
                check = {};
                check["authorId"] = post.authorId;
                check["text"] = post.text;
                check["time"] = post.time;
                check["date"] = post.date;
                check["photo"] = post.photo;
                check["likedBy"] = post.likedBy;
                check["liked"] = false;
                check["likesCount"] = post.likesCount;
                check["id"]= post.id;

                post.likedBy.map(m => {
                    if (m === user.id) {
                        check["liked"] = true
                    }

                })
                newPosts.push(check)

            })
            return res.json({
                resultCode: "0",
                posts: newPosts
            })
        } catch (e) {
            console.log(e);
            req.send({message: `${e}`})
        }
    }

    async updatePost(req, res) {
        try {
            const text = req.body.text;
            const post = await Post.findById(req.body.id)
            if(req.files) {
                const file = req.files.photo
                const avatarName = Uuid.v4() + ".jpeg"
                await file.mv(config.get('staticPath') + "\\" + avatarName)
                post.photo = avatarName;
            }
            post.text = text;
            await post.save()
            return res.status(200).json({
                resultCode: "0"
            })
        } catch (e) {
            return res.status(400).json({message: `${e}`})
        }
    }

}

module.exports = new FileController()