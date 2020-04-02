const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/cultural') 
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
      cuid:'',
      cname:req.body.cname,
      cstart_date:req.body.start_date.split("-").reverse().join("-"),
      cend_date:req.body.end_date.split("-").reverse().join("-")
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
        cname:req.body.cname,
        cstart_date:req.body.start_date.split("-").reverse().join("-"),
        cend_date:req.body.end_date.split("-").reverse().join("-")
    },
    {
      where: { cuid: req.params.cuid}
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
      where: { cuid: req.params.cuid}
    })
    res.json({success:true,deleted:del,message:"Deleted successful"});
  }


module.exports=controllers