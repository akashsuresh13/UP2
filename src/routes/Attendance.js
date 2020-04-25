const express=require('express')
const router=express.Router()
const so_con=require('../controllers/Attendance')



// router.get('/list/:ifid',so_con.list) 

router.post('/classtaken',so_con.insertclass)
router.get('/pdata/:ifid',so_con.initdata)
router.post('/studata',so_con.studentsdata)
router.post('/getuuid',so_con.getuuid)
router.post('/insabs',so_con.insertabse)
router.post('/permission',so_con.permiss)

// router.delete('/delete/:ifid/:icid',so_con.delete)

router.get('/',(req,res) => {
    res.send("Main Page from subs offer")
})

module.exports = router