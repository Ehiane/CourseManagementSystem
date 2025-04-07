const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/cmsdbsequelize.sqlite'
})

module.exports = sequelize