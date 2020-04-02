const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/events_prac')
sequelize.sync({force:false})

controllers.list = async (req, res) => {

    const data = await table.findAll(
      {where:{
        eid:req.params.ieid
      }}
    )
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
      epid:'',
      eid:req.body.ieid,
      edate:req.body.iedate.split("-").reverse().join("-"),
      estart_time:req.body.istart_time,
      eend_time:req.body.iend_time
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
    where: { epid: req.params.iepid}
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

controllers.update = async (req,res) => {

  const data = await table.update({
    edate:req.body.iedate.split("-").reverse().join("-"),
    estart_time:req.body.istart_time,
    eend_time:req.body.iend_time
  },
  {
    where: { 
      epid: req.params.iepid,
    }
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Updated successful"});
}


module.exports=controllers