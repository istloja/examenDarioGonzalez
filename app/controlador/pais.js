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

exports.eliminarPais = (req, res)=>{
  const idPais = req.body.idpais

  modeloPais.eliminarPais(idPais,(error, data)=>{
    if(error){
      res.status(500).send({mensaje:'no se puede eliminar el pais'});
    }else{
      res.send(data);
    }
  });
};

exports.obtenerPaisSuperficie = (req, res)=>{
  const superficiePais = req.body.superficie

  modeloPais.obtenerPaisSuperficie(superficiePais,(error, data)=>{
    if(error){
      res.status(500).send({mensaje:'no se puede listar los paises'});
    }else{
      res.send(data);
    }
  });
};
