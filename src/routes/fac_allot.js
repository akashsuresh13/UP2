const express=require('express')
const router=express.Router()
const so_con=require('../controllers/fac_allot')

router.get('/fetch',so_con.list)
router.post('/create',so_con.create)
router.put('/update',so_con.update)
router.delete('/delete/:aid',so_con.delete)


router.get('/',(req,res) => {
    res.send("Main Page from faculty alloted")
})

module.exports = router