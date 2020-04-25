const controllers={}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/substitue_raise') 
sequelize.sync({force:false})

controllers.list=async (req,res) => {
    const data=await so_con.findAll(
        {
            where:{
                fid:req.params.ifid
            },
            attributes:['cid']
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

controllers.pickerdata = async (req,res) => {

    let fid = req.params.ifid
          
    let sql = `select distinct(cid) from fac_alloted where fid='${fid}' 
    and cid not in (select cid from substitue_raise where fid='${fid}')`

    const data=await sequelize.query(sql,{
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

controllers.availabledata = async (req,res) => {

    let fid = req.params.ifid
          
    let sql = `SELECT so.soid,f.fname,so.cid,so.date,so.hrid 
    FROM substitute_offers so,faculty f 
    where so.cid in (select cid from fac_alloted where fid='${fid}') 
    and so.fid<>'${fid}' and so.soid not in 
    (select soid from substitute_transaction) and so.fid=f.fid`

    const data=await sequelize.query(sql,{
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

controllers.accepteddata = async (req,res) => {

    let fid = req.params.ifid
          
    let sql = `select st.stid,st.soid,f.fname,so.cid,so.date,so.hrid 
    from substitute_transaction st,substitute_offers so,faculty f 
    where so.soid=st.soid and f.fid=so.fid and st.fid='${fid}'`

    const data=await sequelize.query(sql,{
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