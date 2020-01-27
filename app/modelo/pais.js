const mysql = require('../configuracion/bdConexion.js');
const pais = function(Pais){

  this.idpais = Pais.idpais,
  this.nombre = Pais.nombre,
  this.moneda = Pais.moneda,
  this.superficie = Pais.superficie,
  this.idioma = Pais.idioma,
  this.nHabitantes = Pais.nHabitantes
};

pais.listarPais = result =>{
  mysql.query('SELECT * FROM pais', (error,res)=>{
    if (error) {
      result(null, error);
      console.log(error, ' no se pude listar los paises');
      return;
    }else{
      result(null, res);
    }
  });
};

pais.crearPais = (nuevoPais,result) =>{
  mysql.query('INSERT INTO pais SET ?',nuevoPais,(error,res)=>{
    if (error) {
      result(null, error);
      console.log(error, ' no se pude crear el pais');
      return;
    }else{
      result(null, res);
    }
  });
};

module.exports = pais;
