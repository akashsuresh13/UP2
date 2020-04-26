const express=require('express')
const router=express.Router()
const so_con=require('../controllers/subjects')

router.get('/fetch',so_con.list)
router.post('/create',so_con.create)
router.put('/update',so_con.update)
router.delete('/delete/:suid',so_con.delete)


router.get('/',(req,res) => {
    res.send("Main Page from subjects")
})

module.exports = router