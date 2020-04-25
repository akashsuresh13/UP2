const controllers={}

reverse_date = (date) => {
    var newdate = date.split("-").reverse().join("-");
    console.log("Date:>>"+newdate); // Date:>> "2013-05-03"
    return newdate
}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/faculty') 
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
    
controllers.delete=async (req,res) => {

    const del = await so_con.destroy({
        where: { fid: req.params.fid }
    })
    res.json({success: true,deleted: del,message: "Deleted Successfully"})
}

controllers.update=async (req,res) => {

    const del = await so_con.update({
        fname:req.body.fname,
        fgender:req.body.fgen
    },{
        where: { fid: req.body.fid }
    })
    res.json({success: true,deleted: del,message: "Updated Successfully"})
}
//wait wait
controllers.create = async (req,res) => {
    
    let ifid = req.body.fid
    let ifname = req.body.fname
    let ifgen = req.body.fgen
    
    let data = await so_con.create({
        fid:ifid,
        fname:ifname,
        fgender:ifgen
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

//Call karo nanba
// 5mins da. Im eating 
// seri 