const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/students') 
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

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
      sid:req.body.isid,
      sname:req.body.isname,
      sfpd:req.body.isfpd
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      console.log("Error "+error)
      return error;
    })
    // return res
    res.status(200).json({
      success: true,
      message:"Saved Successfully",
      data: data
    });
}

module.exports=controllers