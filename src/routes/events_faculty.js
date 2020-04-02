const express=require('express')
const router=express.Router()
const so_con=require('../controllers/events_faculty')

router.get('/list',so_con.list)
// router.get('/list/:cuid/:eid',so_con.plist)
router.post('/create',so_con.create)
router.delete('/delete/:ieid',so_con.delete)

module.exports = router