const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/events_faculty')
sequelize.sync({force:false})

controllers.list = async (req, res) => {

    const data = await table.findAll()
    .then(function(data){
        return data;
    })
    .catch(error => {
        return error;
    }); 

    res.json({success : true, data : data});

}

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
      eid:req.body.ieid,
      fid:req.body.ifid
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

  controllers.delete = async (req, res) => {

    const del = await table.destroy({
      where: { eid: req.params.ieid,
               fid: req.body.ifid}
    })
    res.json({success:true,deleted:del,message:"Deleted successful"});
  }


module.exports=controllers