//
const dbcon = require("../config/db_config.js");
const Sequelize = require("sequelize");
const { default: initModels } = require("./init-models.js");
const sequelize = new Sequelize(dbcon.DB, dbcon.USER, dbcon.PASSWORD,{
    host: dbcon.HOST,
    dialect: dbcon.dialect,

    pool: {
        max: dbcon.pool.max,
        min: dbcon.pool.min,
        acquire: dbcon.pool.acquire,
        idle: dbcon.pool.idle
    }
});

const db = {};
db.models = initModels(sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;