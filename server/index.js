const express = require('express')
const os = require('os')
const cors = require('cors');

const app = express()
const PORT = 3001;

app.use(cors()); // Enable CORS for all routes


app.get("/", (req, res) => {
    const message = `${os.hostname()}`
    console.log(os)
    res.json(message)
})

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})