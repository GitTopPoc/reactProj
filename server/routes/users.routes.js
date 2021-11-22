const Router = require("express")
const User = require("../models/User")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")


router.get(`/`, authMiddleware,
    async (req, res) => {
        try {
            const {page, count} = req.query;
            let skipValue = 0;
            if (page > 1) {
                skipValue = (page-1)*count;
            }
            let limit = Number(req.query.count)
            const user = await User.findOne({id: req.user.id})
            const users = await User.find().sort({_id:-1}).skip(skipValue).limit(limit);
            const totalCount = await User.count()
            let newUsers =  [];
            let check = {}
            if (!user) {
                return res.statusCode(404).json({
                    message: "User not found"
                })
            }
            users.map(u => {
                check = {};
                check["id"] = u.id;
                check["name"] = u.name;
                check["photo"] = u.photo;
                check["status"] = u.status;

                user.following.map(m => {
                    if (m === u.id) {
                        check["followed"] = true
                    }

                })


                newUsers.push(check)

            })
            return res.json({
                resultCode: "0",
                items: [newUsers],
                totalCount: totalCount
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })




module.exports = router