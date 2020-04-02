const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/events')
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

controllers.plist = async (req, res) => {

  const data = await table.findAll(
    {where : {cuid:req.params.cuid}}
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
      eid:'',
      cuid:req.body.cuid,
      ename:req.body.ename
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

controllers.update = async (req,res) => {
    
    console.log(req.params)
    console.log(req.body)

    const data = await table.update({
      cuid:req.body.cuid,
      ename:req.body.ename
    },
    {
      where: { eid: req.params.eid}
    })
    .then( function(data){
      return data;
    })
    .catch(error => {
      return error;
    }) 
    res.json({success:true, data:data, message:"Updated successful"});
  }

  controllers.delete = async (req, res) => {

    const del = await table.destroy({
      where: { eid: req.params.eid}
    })
    res.json({success:true,deleted:del,message:"Deleted successful"});
  }


module.exports=controllers