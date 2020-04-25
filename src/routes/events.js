const express=require('express')
const router=express.Router()
const so_con=require('../controllers/events')

router.get('/list',so_con.list)
router.get('/list/:cuid',so_con.plist)
router.get('/tlist/:ifid',so_con.teacherdata)
router.post('/create',so_con.create)
router.put('/update/:eid',so_con.update)
router.delete('/delete/:eid',so_con.delete)

module.exports = router