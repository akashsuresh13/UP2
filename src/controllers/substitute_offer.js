const controllers={}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/substitute_offers') 
sequelize.sync({force:false})

controllers.list=async (req,res) => {
    const data=await so_con.findAll()
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    res.json({success: true,data: data})
}

controllers.tfetch = async (req,res) => {
    // parameter get id
    const { id } = req.params;
    console.log("FID : "+id)
    console.log("Im exec")
    // parameter POST
    const data=await sequelize.query("SELECT f.cid,t.day_no,t.hr_no from fac_alloted f,timetable t where t.aid=f.aid and f.fid=(:fid)",{
        replacements:{fid:id},
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })
    res.json({success: true,data: data})
}

    controllers.ofetch = async (req,res) => {
        // parameter get id
        const { id } = req.params;
        console.log("FID : "+id)
        console.log("Im exec")
        // parameter POST
        const data=await so_con.findAll({
            where: {fid:id}
        })
        .then(function(data){
            return data
        })
        .catch(error => {
            return error
        })
    
        res.json({success: true,data: data})
}
controllers.delete=async (req,res) => {
    const { id } = req.body
    console.log('recieved : '+id)
    const del = await so_con.destroy({
        where: { soid: id }
    })
    res.json({success: true,deleted: del,message: "Deleted Successfully"})
}

module.exports=controllers