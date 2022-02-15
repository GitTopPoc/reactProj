const Router = require("express")
const User = require("../models/User")
const Dialogs = require("../models/Dialogs")
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")


router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            })
        }

        let dialogs = await Dialogs.find({'usersId': `${user.id}`}).sort({_id: -1});
        let newDialogs = [];
        let newDialog = {};
        let dialogPhoto = "";
        let dialogName = "";
        for (let j = 0; j < dialogs.length; j++) {
            for (let i = 0; i < dialogs[j].usersId.length; i++) {
                if (dialogs[j].usersId[i] !== user.id) {
                    let dialogUser = await User.findById(dialogs[j].usersId[i])
                    if (dialogUser) {
                        dialogName = dialogUser.name
                        dialogPhoto = dialogUser.photo
                    }
                }
            }
            if (dialogName === "") {
                dialogName = "unknown user"
            }
            newDialog = {};
            newDialog["id"] = dialogs[j].id;
            newDialog["usersId"] = dialogs[j].usersId;
            newDialog["photo"] = dialogs[j].photo;
            newDialog["lastMessage"] = dialogs[j].lastMessage;
            newDialog["messages"] = dialogs[j].messages;
            newDialog["name"] = dialogName;
            newDialog["photo"] = dialogPhoto;
            newDialogs.push(newDialog)
        }

        return res.status(200).json({
            resultCode: 0,
            dialogs: newDialogs
        })
    } catch (e) {
        return res.send({message: `${e}`})
    }
})

router.post('/add-dialog', authMiddleware, async (req, res) => {
    try {

        const dialogCreator = await User.findById(req.user.id)
        const user = await User.findById(req.body.userId)

        if (!dialogCreator || !user) {
            return res.status(404).json({
                error: "User not found"
            })
        }

        const usersId = [dialogCreator.id, user.id]
        const photo = ""
        const lastMessage = ""
        const messages = []
        const dialog = new Dialogs({usersId, photo, lastMessage, messages})
        await dialog.save()

        return res.status(200).json({
            message: "Success"
        })
    } catch (e) {
        return res.send({message: `${e}`})
    }
})

router.post('/post-message', authMiddleware, async (req, res) => {
    try {
        const messageAuthor = await User.findById(req.user.id)
        const dialog = await Dialogs.findById(req.body.dialogId)
        if (!messageAuthor || !dialog) {
            return res.status(404).json({
                error: "Data not found"
            })
        }

        let Data = new Date();
        let Month = Data.getMonth() + 1;
        let Day = Data.getDate();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();


        const authorId = messageAuthor.id
        const time = Hour + ":" + Minutes;
        const date = Day + "." + Month;
        const text = req.body.text
        const photo = "";
        const sent = true;
        const read = false;

        dialog.messages.push({authorId, date, time, text, photo, sent, read})
        await dialog.save()


        return res.status(200).json({
            resultCode: 0
        })
    } catch (e) {
        return res.send({message: `${e}`})
    }
})

router.get('/get-message', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        const dialog = await Dialogs.findById(req.query.dialogId)
        if (!user || !dialog) {
            return res.status(404).json({
                error: "Data not found"
            })
        }

        let limit = 20;
        let messageData = [];


        if (limit >= dialog.messages.length) {
            limit = dialog.messages.length
            for(let j = 0; j < limit; j++) {
                messageData.push(dialog.messages[j])
            }
        } else {
            for (let i = dialog.messages.length - 1; i >= dialog.messages.length - limit; i--) {
                messageData.unshift(dialog.messages[i])
            }
        }




        return res.status(200).json({
            resultCode: 0,
            messageData
        })
    } catch (e) {
        return res.send({message: `${e}`})
    }
})


module.exports = router