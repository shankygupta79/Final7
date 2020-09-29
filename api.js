const route = require('express').Router();
const dotenv = require("dotenv")
dotenv.config()
route.get('/', (req, res) => {
    res.redirect('http://localhost:3420/info/manage_entry')
})

module.exports = route