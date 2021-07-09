const express = require("express")
const path = require('path')
const app = express()

// Setup static middleware
app.use(express.static(path.join(__dirname, 'public')))

// Handle not existing page request
app.get('*', function (req, res) {
    res.status(404)
    res.sendFile(path.join(__dirname, "public", "error.html"))
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT)
})