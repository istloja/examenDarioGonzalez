const mysql = require('../configuracion/bdConexion.js');
const provincia = function(Provincia){

  this.idprovincia = Provincia.idprovincia,
  this.nombre = Provincia.nombre,
  this.nCantones = Provincia.nCantones
  this.superficie = Provincia.superficie,
  this.region = Provincia.region,
  this.idpais = Provincia.idpais
};

provincia.listarProvincia = result =>{
  mysql.query('SELECT * FROM provincia', (error,res)=>{
    if (error) {
      result(null, error);
      console.log(error, ' no se pude listar las provincias');
      return;
    }else{
      result(null, res);
    }
  });
};

provincia.crearPais = (nuevoProvincia,result) =>{
  mysql.query('INSERT INTO provincia SET ?',nuevaProvincia,(error,res)=>{
    if (error) {
      result(null, error);
      console.log(error, ' no se pude crear la provincia');
      return;
    }else{
      result(null, res);
    }
  });
};

module.exports = provincia;
