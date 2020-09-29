const route = require('express').Router();
const dotenv = require("dotenv")
dotenv.config()
route.get('/', (req, res) => {
    res.redirect('https://final7.herokuapp.com/info/manage_entry')
})

module.exports = route