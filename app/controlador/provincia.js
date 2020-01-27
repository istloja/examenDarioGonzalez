const modeloProvincia = require('../modelo/provincia.js');

exports.listarProvincia = (req,res)=>{
  modeloProvincia.listarProvincia((error,data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo listar las provincias'});
    }else{
      res.send(data);
    }
  });
}


exports.crearProvincia = (req,res)=>{
  const nuevaProvincia = new modeloProvincia({

    idpais:req.body.idpais,
    nombre:req.body.nombre,
    moneda:req.body.moneda,
    superficie:req.body.superficie,
    idioma:req.body.idioma,
    nHabitantes:req.body.nHabitantes

  });

  modeloProvincia.crearProvincia(nuevaProvincia,(error,data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo crear el provincia'});
    }else{
      res.send(data);
    }
  });
};
