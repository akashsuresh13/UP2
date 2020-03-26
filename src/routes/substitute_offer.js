const express=require('express')
const router=express.Router()
const so_con=require('../controllers/substitute_offer')

//router.get('/list',EmployeeController.list) 
//router.post('/create',EmployeeController.create)

router.get('/fetch',so_con.list)

router.post('/delete',so_con.delete)

router.get('/tfetch/:id',so_con.tfetch)

router.post('/create',so_con.create)

router.get('/ofetch/:id',so_con.ofetch)
router.get('/',(req,res) => {
    res.send("Main Page from subs offer")
})

module.exports = router