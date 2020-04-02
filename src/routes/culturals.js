const express=require('express')
const router=express.Router()
const so_con=require('../controllers/culturals')

router.get('/list',so_con.list)
router.post('/create',so_con.create)
router.put('/update/:cuid',so_con.update)
router.delete('/delete/:cuid',so_con.delete)

module.exports = router