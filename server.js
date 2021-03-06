require('dotenv').config()
const subs_offer=require('./src/routes/substitute_offer')
const subs_raise=require('./src/routes/substitute_raise')
const subs_trans=require('./src/routes/substitute_trans')
var Users = require('./src/routes/Users')
const students = require('./src/routes/students')
const culturals = require('./src/routes/culturals')
const events = require('./src/routes/events')
const events_faculty = require('./src/routes/events_faculty')
const events_student = require('./src/routes/events_student')
const events_practise = require('./src/routes/events_practise')
const events_attend = require('./src/routes/events_attend')
const attendance = require('./src/routes/Attendance')
const subj = require('./src/routes/subjects')
const faculty = require('./src/routes/faculty')
const fac_allot = require('./src/routes/fac_allot')
const users_fac = require('./src/routes/users_fac')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('port',process.env.port||5000)
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/offer',subs_offer)
app.use('/raise',subs_raise)
app.use('/trans',subs_trans)
app.use('/users',Users)
app.use('/culturals',culturals)
app.use('/students',students)
app.use('/evefac',events_faculty)
app.use('/evestu',events_student)
app.use('/evepra',events_practise)
app.use('/eveatt',events_attend)
app.use('/events',events)
app.use('/attendance',attendance)
app.use('/subj',subj)
app.use('/faculty',faculty)
app.use('/fac_allot',fac_allot)
app.use('/users_fac',users_fac)

app.use('/',(req,res) => {
    res.send("Hello World from node.js server")
})

app.listen(app.get('port'),() => {
    console.log("starting node.js server")
})