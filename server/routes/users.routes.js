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
            const users = await User.find().sort({_id:-1}).skip(skipValue).limit(limit);
            const totalCount = await User.count()

            return res.json({
                resultCode: "0",
                items: [users],
                totalCount: totalCount
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })




module.exports = router