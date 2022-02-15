const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config");
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')


router.post('/registration',

    [
        check('email', 'Uncorrect email').isEmail(),
        check('name', 'Name must be longer than 2 and shorter than 50 symbols').isLength({min:4, max:50}),
        check('password', 'Password must be longer than 5 and shorter than 12 symbols').isLength({min:5, max:12}),
    ],
    async (req, res) => {

    try {
        const  errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, name, password} = req.body
        const  candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const  hashPassword = await bcrypt.hash(password, 8)
        const status = "New user";
        const photo = "";
        const github = "";
        const facebook = "";
        const linkedin = "";
        const instagram = "";
        const {following, followers} = [];
        const user = new User({email, name, password: hashPassword, photo, status, github, facebook, linkedin,instagram, following, followers})
        await user.save()
        return  res.json({resultCode: "0", message: "User was created"})


    }
    catch (e) {
        console.log(e)
        res.send({message: `${e}`})
    }
})

router.post('/login', async (req, res) => {

        try {
           const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid user data"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                resultCode: "0",
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    photo: user.photo,
                    status: user.status
                }
            })

        }
        catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware,
    async (req, res) => {
    try {

        const user = await User.findById(req.user.id)
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            resultCode: "0",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                photo: user.photo,
                status: user.status
            }
        })
    }
    catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.patch('/change-password', authMiddleware,  async (req, res) => {

    try {
        console.log(req.body)
        const user = await User.findOne({id: req.user.id})
        const isPassValid = bcrypt.compareSync(req.body.data.password, user.password)
        if (!isPassValid) {
            return res.json({
                resultCode: "400",
                message: "Invalid password"
            })
        }
        const  hashPassword = await bcrypt.hash(req.body.data.newPassword, 8)
        await User.findOneAndUpdate(user, {password: hashPassword})
        user.save();
        return res.json({
            resultCode: "0",
            message: "Password changed successfully"
        })

    }
    catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router