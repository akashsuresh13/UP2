const express=require('express')
const router=express.Router()
const so_con=require('../controllers/substitute_raise')

router.get('/list/:ifid',so_con.list) 
router.post('/create',so_con.create)
router.get('/pdata/:ifid',so_con.pickerdata)
router.get('/avvdata/:ifid',so_con.availabledata)
router.get('/accdata/:ifid',so_con.accepteddata)
router.delete('/delete/:ifid/:icid',so_con.delete)

router.get('/',(req,res) => {
    res.send("Main Page from subs offer")
})

module.exports = router