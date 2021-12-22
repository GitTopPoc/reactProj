const config = require('config')
const User = require('../models/User')
const Uuid = require('uuid')
const fs = require('fs')

class FileController {
    async uploadAvatar(req, res) {
        try {
            console.log(req.files)
            const file = req.files.file
            const user = await User.findById(req.user.id)
            const avatarName = Uuid.v4() + ".jpeg"
            console.log("check: " + config.get('staticPath'))
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
            console.log(e)
            return res.status(400).json({message: "Upload error"})
        }
    }

    async deleteAvatar(req, res) {
        try {
            const user = await User.findById(req.user.id)
            fs.unlinkSync(config.get('staticPath')+ "\\" + user.photo)
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
            console.log(e)
            return res.status(400).json({message: 'Upload avatar error'})
        }
    }

}

module.exports = new FileController()