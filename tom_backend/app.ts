import express from "express"
const app = express()
app.use(express.json())

app.get("/ping", function(_req, res) {
    res.status(200).json({
        data: "davidbay says hello!"
    })
    return
})

export default app