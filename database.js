const Sequelize = require('sequelize')
const dotenv = require("dotenv")
dotenv.config()
const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    pool: {
        max: 8,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
const Code = db.define('Codes', {
    name: Sequelize.STRING,
    topic : Sequelize.STRING,
    source: Sequelize.STRING,
    date : Sequelize.STRING,
    code : Sequelize.TEXT,
    des : Sequelize.TEXT,


})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database " + err))
exports = module.exports = {
    Code
}