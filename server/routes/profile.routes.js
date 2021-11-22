const Router = require("express")
const User = require("../models/User")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")
const fileController = require("../controllers/fileController")


router.get(`/`, authMiddleware,
    async (req, res) => {

        try {

            const user = await User.findById(req.query.userId)
            return res.json({
                resultCode: "0",
                userId: user.id,
                email: user.email,
                fullName: user.name,
                photo: user.photo,
                status: user.status,
                contacts: {
                    github: user.github,
                    facebook: user.facebook,
                    linkedin: user.linkedin,
                    instagram: user.instagram
                }
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })


router.patch('/status', authMiddleware,
    async (req, res) => {

        try {

            const user = await User.findOne({id: req.user.id})

            if (!user) {
                return res.json({
                    resultCode: "404",
                    message: "User not found"
                })
            }
            Object.assign(user, req.body);
            user.save();
            return res.json({
                resultCode: "0",
                message: "Status changed successfully"
            })
        } catch (e) {
            res.send({message: `${e}`})
        }
    })

router.get('/getstatus', authMiddleware, async (req, res) => {

    try {
        const user = await User.findById(req.query.userId)
        return res.json({
            resultCode: "0",
            status: user.status
        })
    } catch (e) {
        res.send({message: `${e}`})
    }
})

router.patch('/update-profile', authMiddleware, async (req, res) => {

    try {
        const user = await User.findOne({id: req.user.id})

        if (!user) {
            return res.json({
                resultCode: "404",
                message: "User not found"
            })
        }
        Object.assign(user, req.body.newData);
        user.save();
        return res.json({
                resultCode: "0",
                message: "Profile data changed successfully",
                email: user.email,
                fullName: user.name,
                photo: user.photo,
                status: user.status,
                contacts: {
                    github: user.github,
                    facebook: user.facebook,
                    linkedin: user.linkedin,
                    instagram: user.instagram
                }
            }
        )

    } catch (e) {
        res.send({message: `${e}`})
    }
})

router.post('/avatar', authMiddleware, fileController.uploadAvatar)
router.delete('/avatar', authMiddleware, fileController.deleteAvatar)

router.post('/follow/:userId', authMiddleware, async (req, res) => {

    try {
        const user = await User.findOne({id: req.user.id})
        let alreadySub = false;
        if (!user) {
            return res.statusCode(404).json({
                message: "User not found"
            })
        }
        user.following.map(m => {
            if (m === req.params.userId) {
                alreadySub = true;
            }
        })
        if (alreadySub === false) {
            user.following.unshift(req.params.userId)
            user.save();
        } else {
            return res.status(400).json({
                    message: "Already subscribed!"

                }
            )
        }
        return res.json({
                resultCode: "0",
                message: "Followed successfully!"

            }
        )

    } catch (e) {
        res.send({message: `${e}`})
    }
})

router.delete('/follow/:userId', authMiddleware, async (req, res) => {

    try {
        const user = await User.findOne({id: req.user.id})
        let alreadySub = false;
        if (!user) {
            return res.statusCode(404).json({
                message: "User not found"
            })
        }
        user.following.map(m => {
            if (m === req.params.userId) {
                alreadySub = true;

            }
        })
        if (alreadySub === true) {
            user.following.shift(req.params.userId)
            user.save();
        } else {
            return res.status(400).json({
                    message: "Not subscribed!"

                }
            )
        }
        return res.json({
                resultCode: "0",
                message: "Unfollowed successfully!"

            }
        )

    } catch (e) {
        res.send({message: `${e}`})
    }
})



module.exports = router