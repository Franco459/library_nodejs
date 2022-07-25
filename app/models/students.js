//modelado de students y sus caracteristicas con Sequalize
const Sequelize = require('sequelize'); 

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('students', {
        student_ID: {
            autoIncrement: true, 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        student_LU: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        student_Name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        student_Surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        student_Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        student_DOB: {
            type: DataTypes.DATE,
            allowNull: false
        }

}, {
    sequelize,
    tableName: 'students',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique:  true,
        using: "BTREE",
        fields: [{ name: "student_ID" }]
    },]    
    });
};