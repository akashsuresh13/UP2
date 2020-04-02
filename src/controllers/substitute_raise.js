const controllers={}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/substitue_raise') 
sequelize.sync({force:false})

controllers.list=async (req,res) => {
    const data=await so_con.findAll(
        {
            where:{
                fid:req.params.ifid
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
            fid:req.params.ifid,
            cid:req.params.icid
         }
    })
    res.json({success: true,deleted: del,message: "Deleted Successfully"})
}

controllers.create = async (req,res) => {
    
    let data = await so_con.create({
      fid: req.body.ifid,
      cid: req.body.icid,     
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