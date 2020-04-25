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

controllers.single_unit = async kata =>{

  const data = await table.create(kata)
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error "+error)
    return error;
  })

  return data

}

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    let data = {
      epid:'',
      eid:req.body.ieid,
      edate:req.body.iedate.split("-").reverse().join("-"),
      estart_time:req.body.istart_time,
      eend_time:req.body.iend_time
    }
    let resp = await controllers.single_unit(data)
    res.status(200).json({
      success: true,
      message:"Saved Successfully",
      data: resp
    });

}

controllers.multi_insert = async (req,res) => {
    
  let data = ''
  let feid = req.body.ieid
  let start_date = req.body.istart_date
  let end_date = req.body.iend_date
  let start_time = req.body.istart_time
  let end_time = req.body.iend_time

  var start = new Date(Date.parse(start_date.split("-").reverse().join("-")));
  var end = new Date(Date.parse(end_date.split("-").reverse().join("-")));

  var loop = new Date(start);
  while(loop <= end){

      let pata = {
        epid:'',
        eid:feid,
        edate:loop.toISOString().slice(0,10),
        estart_time:start_time,
        eend_time:end_time
      }

      data+= await controllers.single_unit(pata)         
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
  }
  res.json({success: true,data: data})
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