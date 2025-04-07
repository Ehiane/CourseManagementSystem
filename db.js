const {Sequelize} = require('sequelize')

const sequelize = Sequelize({
    dialect: 'sqlite',
    storage: './database/cmsdbsequelize.sqlite'
})

module.exports = sequelize