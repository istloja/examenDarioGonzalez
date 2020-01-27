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

    idprovincia:req.body.idprovincia,
    nombre:req.body.nombre,
    nCantones:req.body.nCantones,
    superficie:req.body.superficie,
    region:req.body.region,
    idpais:req.body.idpais

  });

  modeloProvincia.crearProvincia(nuevaProvincia,(error,data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo crear el provincia'});
    }else{
      res.send(data);
    }
  });
};

exports.obtenerProvinciaIdPais = (req, res)=>{
  const idPais = req.body.idpais

  modeloProvincia.obtenerProvinciaIdPais(idPais,(error, data)=>{
    if(error){
      res.status(500).send({mensaje:'no se pudo obtener las provincias'});
    }else{
      res.send(data);
    }
  })
}
