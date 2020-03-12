var Sequelize=require('sequelize')
require('dotenv').config()

const sequelize=new Sequelize(process.env.db_name,process.env.db_user,process.env.db_password, {
        host: process.env.db_host,
        dialect: 'mysql',
        define:{
            timestamps: false
        }
    }
)

module.exports=sequelize