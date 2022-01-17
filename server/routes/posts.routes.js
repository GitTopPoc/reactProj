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
            let posts = await Post.find({'authorId': `${user.id}`}).sort({_id:-1});
            return res.json({
                resultCode: "0",
                posts
            })
        } catch (e) {
            return res.send({message: `${e}`})
        }
    })
module.exports = router