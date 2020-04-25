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

controllers.initdata = async (req,res) => {

    let fid = req.params.ifid
          
    let sql = `select f.cid,f.subj_code,t.hr_no 
    from fac_alloted f,timetable t 
    where t.aid=f.aid and t.hr_no in 
    (select hrid from timeline 
        where '${new Date().toTimeString().slice(0,5)}' BETWEEN start_time and end_time) 
        and t.day_no=${new Date().getDay()} and f.fid='${fid}'`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })
    console.log('Attendance data',data)
    res.json({success: true,data: data})
}

controllers.insertclass = async (req,res) => {

    let fid = req.body.ifid
    let cid = req.body.icid
    let scode = req.body.iscode
    let sdate = req.body.isdate
    let shr = req.body.ihr
          
    let sql = `insert INTO class_taken VALUES 
    (uuid(),'${fid}','${cid}','${scode}','${sdate}','${shr}')`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.INSERT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })
    res.json({success: true,data: data})
}

controllers.insertabse = async (req,res) => {
    
    let uuid = req.body.cuuid;
    let sid = req.body.csid;

    let sql = `insert INTO absentees VALUES ('${uuid}','${sid}')`;
    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.INSERT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    let r = "";
    if(data[1]==1)
        r = "True"
    else
        r = "False"
    console.log(data)
    res.end(r)
}

controllers.studentsdata = async (req,res) => {

    let cid = req.body.icid
          
    let sql = `SELECT * from students 
    where sid in (select sid from stu_alloted where cid='${cid}');`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })
    res.end(JSON.stringify(data))
}

controllers.permiss = async (req,res) => {
    
    let fid = req.body.ifid;
    let upass = req.body.ipass;

    let sql = `select count(*) as result from users_fac 
    where fid='${fid}' and upass='${upass}'`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    // let cda = await JSON.json(data)
    let temp = ""+data[0].result
    res.end(temp)   
}


controllers.getuuid = async (req,res) => {

    let fid = req.body.ifid
    let cid = req.body.icid
    let scode = req.body.iscode
    let sdate = req.body.isdate
    let shr = req.body.ihr
          
    let sql = `SELECT ctid from class_taken 
    where fid='${fid}' and cid='${cid}' and 
    subj_code='${scode}' and ${'`date`'} = '${sdate}' 
    and hr_no='${shr}'`

    const data=await sequelize.query(sql,{
        type: sequelize.QueryTypes.SELECT
    })
    .then(function(data){
        return data
    })
    .catch(error => {
        return error
    })

    console.log(data.length)
    let temp;
    if(data.length>0){
        temp = data[0].ctid;
        console.log(temp)
    }else{
        temp = "SOS";
    }

    res.end(temp)
}



module.exports=controllers