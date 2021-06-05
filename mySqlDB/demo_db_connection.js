var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yt12345678"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});