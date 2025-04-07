const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')

class User extends Model {}

User.init({
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
    sequelize,
    modelName: 'User',
    }
);

module.exports = User;