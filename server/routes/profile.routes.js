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

        if(!user) {
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
    }
    catch (e) {
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
    }
    catch (e) {
        res.send({message: `${e}`})
    }
})

router.patch('/update-profile', authMiddleware, async (req, res) => {

    try {
        const user = await User.findOne({id: req.user.id})

        if(!user) {
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

    }
    catch (e) {
        res.send({message: `${e}`})
    }
})

router.post('/avatar', authMiddleware, fileController.uploadAvatar)
router.delete('/avatar', authMiddleware, fileController.deleteAvatar)





module.exports = router