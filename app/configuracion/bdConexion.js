const mysql = require('mysql');
const bdConfiguracion = require('./bdConfiguracion.js');
const conexion = mysql.createConnection({

  host:bdConfiguracion.host,
  user:bdConfiguracion.user,
  password:bdConfiguracion.password,
  database:bdConfiguracion.database

});

conexion.connect(error=>{
  if(error) throw error;
  console.log('conexion bd establesida');
});

module.exports = conexion;
