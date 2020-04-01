const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const sequelize=require('../models/database')
const User = sequelize.import("../models/users_fac")
users.use(cors())
process.env.SECRET_KEY = 'secret'

users.post('/login',async (req,res) => {
    let sql = `select u.uid,f.fname,u.upass,u.fid 
                from users_fac u,faculty f 
                where u.fid=f.fid and u.uid=(:email_id)`
    const data=await sequelize.query(sql,{
        replacements:{email_id:req.body.uemail},
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(user){
        console.log(user)
        if(user){
            let temp = user[0]
            let userdatas = {
                user_email_id:temp.uid,
                user_FID:temp.fid,
                user_name:temp.fname
            }
            if(req.body.upass==temp.upass){
                let token = jwt.sign(userdatas,process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.json({error:false,data:token})
            }else{
                res.json({error:true})
            }
        }else{
            res.status(400).json({error: true})
        }
    })
    .catch(err => {
        res.status(400).json({error: true})
    })
})

module.exports = users