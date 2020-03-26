const controllers={}

reverse_date = (date) => {
    var newdate = date.split("-").reverse().join("-");
    console.log("Date:>>"+newdate); // Date:>> "2013-05-03"
    return newdate
}

const sequelize=require('../models/database')
var so_con = sequelize.import('../models/substitute_offers') 
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

controllers.single_unit = async (fid,new_date,day_no) => {

    let sql = `INSERT INTO substitute_offers 
                SELECT '' as soid,'${fid}' as fid,f.cid,
                '${new_date}' as ${`date`},t.hr_no as hrid 
                from fac_alloted f,timetable t 
                WHERE t.aid=f.aid and f.fid='${fid}' 
                and t.day_no=${day_no}`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.INSERT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    return data

}

controllers.single_insert = async(req,res) => {

    let fid = req.body.ifid
    let start_date = req.body.start_date
    var start = new Date(Date.parse(start_date));
    var loop = new Date(start);
    let data = await controllers.single_unit(fid,loop.toISOString().slice(0,10),loop.getDay())
    res.json({success: true,data: data})
    
}

controllers.multi_insert = async (req,res) => {
    
    let data = ''
    let fid = req.body.ifid
    let start_date = req.body.start_date
    let end_date = req.body.end_date

    var start = new Date(Date.parse(start_date));
    var end = new Date(Date.parse(end_date));

    var loop = new Date(start);
    while(loop <= end){
        data+= await controllers.single_unit(fid,loop.toISOString().slice(0,10),loop.getDay())         
        var newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
    }
    res.json({success: true,data: data})
}

controllers.tfetch = async (req,res) => {

    let id = req.body.fid
    let rdno = req.body.dno        

    const data=await sequelize.query("SELECT CONCAT(t.hr_no,' - ',f.cid) as hr_no from fac_alloted f,timetable t where t.aid=f.aid and f.fid=(:fid) and t.day_no=(:dno)",{
        replacements:{fid:id,dno:rdno},
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

    controllers.ofetch = async (req,res) => {
        // parameter get id
        const { id } = req.params;
        console.log("FID : "+id)
        console.log("Im exec")
        // parameter POST
        const data=await so_con.findAll({
            where: {fid:id}
        })
        .then(function(data){
            return data
        })
        .catch(error => {
            return error
        })
    
        res.json({success: true,data: data})
}
controllers.delete=async (req,res) => {

    // let { id } = req.body
    // console.log(req.body)
    const del = await so_con.destroy({
        where: { soid: req.body.soid }
    })
    res.json({success: true,deleted: del,message: "Deleted Successfully"})
}



controllers.create = async (req,res) => {
    
    console.log(req.body)
    const {fid,cid,date,hrid} = req.body
    console.log(fid,cid,date,hrid)
    let data = await so_con.create({
        soid: "",
      fid: fid,
      cid: cid,
      date: date.split("-").reverse().join("-"),
      hrid: hrid,      
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