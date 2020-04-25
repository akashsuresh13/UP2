const express=require('express')
const router=express.Router()
const so_con=require('../controllers/events_practise')

router.get('/list/:ieid',so_con.list)
router.post('/create',so_con.create)
router.post('/mul_create',so_con.multi_insert)
router.put('/update/:iepid',so_con.update)
router.delete('/delete/:iepid',so_con.delete)

module.exports = router