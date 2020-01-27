const modeloPais = require('../modelo/pais.js');

exports.listarPais = (req,res)=>{
  modeloPais.listarPais((error,data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo listar los paises'});
    }else{
      res.send(data);
    }
  });
};

exports.crearPais = (req,res)=>{
  const nuevoPais = new modeloPais({

    idpais:req.body.idpais,
    nombre:req.body.nombre,
    moneda:req.body.moneda,
    superficie:req.body.superficie,
    idioma:req.body.idioma,
    nHabitantes:req.body.nHabitantes

  });

  modeloPais.crearPais(nuevoPais,(error,data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo crear el pais'});
    }else{
      res.send(data);
    }
  });
};
