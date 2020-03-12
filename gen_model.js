require('dotenv').config()

var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto(
  process.env.db_name,
  process.env.db_user, 
  process.env.db_password,{
  host: process.env.db_host,
  port:'3306',
  dialect: 'mysql'
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});