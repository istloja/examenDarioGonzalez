module.exports = app =>{
  const provincia = require('../controlador/provincia.js');
  app.get('/listarProvincias',provincia.listarProvincia);
  app.post('/crearProvincia',provincia.crearProvincia);
  app.post('/obtenerProvinciaIdPais',provincia.obtenerProvinciaIdPais);

}
