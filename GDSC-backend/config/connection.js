const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    "GDSC-project",
    "root",
    "",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

module.exports = sequelize