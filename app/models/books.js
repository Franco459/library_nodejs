const Sequelize = require('sequelize'); 
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('books', {
        id: {
            autoIncrement: true, 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{ sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique:  true,
        using: "BTREE",
        fields: [{ name: "id" }]
    },]  
    });
};