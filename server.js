const express = require('express');
const SERVER_PORT=process.env.PORT || 3420
const path=require('path')
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const cookieSession = require('cookie-session')
const passport = require('passport')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieSession({
    maxAge:20*60*1000,
    keys:[process.env.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/',require('./api'));
app.use('/info', require('./holiday'));


app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3420/");
});

//initialoze passport

app.use((req, res, next) => {
    next()
})

//set up routes

//taskkill/f /im node.exe