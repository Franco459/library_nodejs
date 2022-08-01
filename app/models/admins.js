const Sequelize = require('sequelize'); 

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('admins', {
        ID: {
            autoIncrement: true, 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'admins',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique:  true,
            using: "BTREE",
            fields: [{ name: "ID" }]
        },]    
        });
    };