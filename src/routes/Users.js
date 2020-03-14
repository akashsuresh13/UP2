const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const sequelize=require('../models/database')
const User = sequelize.import("../models/users_fac")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/login',(req,res) => {
    User.findOne({
        where:{
            uid: req.body.uemail
        }
    })
    .then(user => {
        if(user){
            console.log(user)
            if(req.body.upass==user.upass){
                // let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                //     expiresIn: 1440
                // })
                // console.log(token)
                // res.send(token)
                let token = user.fid
                res.send(token)
            }
        }else{
            res.status(400).json({error: 'User does not exist'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users