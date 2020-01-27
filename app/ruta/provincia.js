module.exports = app =>{
  const pais = require('../controlador/provincia.js');
  app.get('/listarProvincias',pais.listarProvincia);
}
