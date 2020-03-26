const express=require('express')
const router=express.Router()
const students=require('../controllers/students')

// router.get('/fetch',so_con.list)
// router.post('/delete',so_con.delete)
router.get('/tfetch',students.tfetch)
// router.post('/create',so_con.create)
// router.get('/ofetch/:id',so_con.ofetch)
router.get('/',(req,res) => {
    res.send("Main Page from students")
})

module.exports = router