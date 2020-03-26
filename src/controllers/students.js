const controllers={}

const sequelize=require('../models/database')
//var so_con = sequelize.import('../models/substitute_offers') 
sequelize.sync({force:false})

controllers.tfetch = async (req,res) => {
    // // parameter get id
    // const { id } = req.params;
    // console.log("FID : "+id)
    // console.log("Im exec")
    // // parameter POST
    
    let sql = `select ss.sid,ss.sname 
                from stu_alloted sa, students ss 
                where sa.sid=ss.sid and sa.cid='4CSE1' 
                limit 15`
    
    const data=await sequelize.query(sql,{
        // replacements:{fid:id},
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

module.exports=controllers