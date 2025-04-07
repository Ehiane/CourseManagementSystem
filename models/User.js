const sequelize = require('../db')
const {Model, DataTypes} = require('sequelize')

class User extends Model {}

User.init(
    {
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
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
    },
);

module.exports = User;