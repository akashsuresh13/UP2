const express=require('express')
const router=express.Router()
const so_con=require('../controllers/events_attend')

router.get('/list/:iepid',so_con.list) 
router.post('/create/:iepid',so_con.create)
router.delete('/delete/:iepid',so_con.delete)

router.get('/',(req,res) => {
    res.send("Main Page from subs offer")
})

module.exports = router