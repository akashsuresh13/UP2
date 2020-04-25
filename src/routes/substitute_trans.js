const express=require('express')
const router=express.Router()
const so_con=require('../controllers/substitute_trans')

router.get('/list/:ifid',so_con.list) 
router.post('/create',so_con.create)
router.delete('/delete/:istid',so_con.delete)

router.get('/',(req,res) => {
    res.send("Main Page from subs offer")
})

module.exports = router