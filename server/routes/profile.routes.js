const Router = require("express")
const User = require("../models/User")
const router = new Router()


router.get(`/:userId`,
    async (req, res) => {

        try {
            const user = await User.findById(req.params.userId)
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
            console.log(e)
            res.send({message: "Server error"})
        }
    })



router.patch('/status/:userId', async (req, res) => {

    try {

        const user = await User.findById(req.params.userId)

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
        console.log(e)
        res.send({message: `${e}`})
    }
})

router.get('/getstatus/:userId', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId)
        return res.json({
            resultCode: "0",
            status: user.status
        })
    }
    catch (e) {
        console.log(e)
        res.send({message: `${e}`})
    }
})

router.patch('/update-profile/:userId', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId)

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
        console.log(e)
        res.send({message: `${e}`})
    }
})





module.exports = router