const mysql = require("mysql");
const DataBase = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chaghookadeh",
});

module.exports = DataBase;
