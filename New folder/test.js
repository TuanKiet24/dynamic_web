var mysql = require('mysql2');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "tuankiet"
// });

function Connection() {
  this.pool = null;
  
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'tuankiet',
      database: 'List'
    });
  };
  
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

var con = mysql.connection

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = new Connection();