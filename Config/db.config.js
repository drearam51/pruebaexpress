var mysql = require('mysql');
var dbConn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'node_mysql_crud_db',
   port: 3306
});
dbConn.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});



 module.exports = dbConn;