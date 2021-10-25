const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const profileRoutes = require("./routes/profile.routes")
const app = express()
const corsMiddleware = require("./middleware/cors.middleware")
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/profile", profileRoutes)


const start =  async () =>{
    try {
        console.log("Server starting...")
        await mongoose.connect(config.get("dbUrl"))
        console.log("Connecting to DB")
        app.listen(PORT, () => {
            console.log("Server started on port: ", PORT)
        })

    }
    catch (e) {

    }
}

start()