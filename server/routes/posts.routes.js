const Router = require("express")
const Post = require("../models/Post")
const User = require("../models/User")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")

router.post('/add-post', authMiddleware, async (req, res) => {

    try {
        const {postText} = req.body;
        const user = await User.findById(req.user.id)
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        Hour = Data.getHours();
        Minutes = Data.getMinutes();
        postDate = Day + "." + Month + 1;
        postTime = Hour + ":" + Minutes;


        const authorId = user.id;
        const text = postText;
        const time = postTime;
        const date = postDate;
        const likedBy = [];
        const likesCount = 0;
        const post = new Post({authorId, text, time, date, likedBy, likesCount})
        await post.save()
        return res.json({
            resultCode: "0",
            message: "Post was created successfully"
        })
    } catch (e) {
        console.log(e);
        req.send({message: `${e}`})
    }

})

router.get('/:userId', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findById(req.params.userId)
            let posts = await Post.find({'authorId': `${user.id}`});
            return res.json({
                resultCode: "0",
                posts
            })
        } catch (e) {
            return res.send({message: `${e}`})
        }
    })
module.exports = router