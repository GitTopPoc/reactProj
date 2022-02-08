const Router = require("express")
const Post = require("../models/Post")
const User = require("../models/User")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")
const fileController = require("../controllers/fileController");


router.post('/add-post', authMiddleware, fileController.addPost)


router.get('/:userId', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findById(req.params.userId)
            let posts = await Post.find({'authorId': `${user.id}`}).sort({_id: -1});
            let newPosts = [];
            let newPost = {}

            if (!user) {
                return res.statusCode(404).json({
                    message: "User not found"
                })
            }
            posts.map(post => {
                newPost = {};
                newPost["authorId"] = post.authorId;
                newPost["text"] = post.text;
                newPost["time"] = post.time;
                newPost["date"] = post.date;
                newPost["photo"] = post.photo;
                newPost["likedBy"] = post.likedBy;
                newPost["liked"] = false;
                newPost["likesCount"] = post.likesCount;
                newPost["id"] = post.id;

                newPost.likedBy.map(m => {
                    if (m === req.user.id) {

                        newPost["liked"] = true
                    }
                })
                newPosts.push(newPost)
            })
            return res.json({
                resultCode: "0",
                posts: newPosts
            })
        } catch (e) {
            return res.send({message: `${e}`})
        }
    })

router.post('/like', authMiddleware, async (req, res) => {

    try {

        const post = await Post.findById(req.body.postId)
        let alreadyLiked = false;
        post.likedBy.map(m => {
            if (m === req.user.id) {
                alreadyLiked = true;
            }
        })
        if (alreadyLiked === true) {
            post.likedBy.shift(req.user.id)
            post.likesCount = post.likesCount - 1;
            await post.save();
        } else {
            post.likedBy.unshift(req.user.id)
            post.likesCount = post.likesCount + 1;
            await post.save();
        }
        return res.status(200).json({
            resultCode: "0"
        })

    } catch (e) {
        res.send({message: `${e}`})
    }
})

router.post('/delete', authMiddleware, async (req, res) => {

    try {
        const post = await Post.findById(req.body.postId)
        post.deleteOne({"_id:": req.body.postId})
        return res.status(200).json({
            resultCode: "0"
        })

    } catch (e) {
        res.send({message: `${e}`})
    }
})


router.patch('/update-post', authMiddleware, fileController.updatePost)



module.exports = router