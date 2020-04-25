const controllers={}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/events_stud_att') 
sequelize.sync({force:false})

controllers.list=async (req,res) => {
    const data=await so_con.findAll(
        {
            where:{
                epid:req.params.iepid
            }
        }
    )
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    res.json({success: true,data: data})
}

controllers.delete=async (req,res) => {

    const del = await so_con.destroy({
        where: { 
            epid:req.params.iepid,
            sid:req.body.isid
         }
    })
    res.json({success: true,deleted: del,message: "Deleted Successfully"})
}

controllers.create = async (req,res) => {
    
    let data = await so_con.create({
      epid:req.params.iepid,
      sid:req.body.isid     
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