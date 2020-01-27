module.exports = app =>{
  const pais = require('../controlador/pais.js');
  app.get('/listarPaises',pais.listarPais);
  app.post('/crearPais',pais.crearPais);
  app.post('/eliminarPais',pais.eliminarPais);
  app.post('/obtenerPaisSuperficie',pais.obtenerPaisSuperficie);

}
