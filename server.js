const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.json({mensaje:'examen'})
});

require("./app/ruta/pais.js")(app);
require("./app/ruta/provincia.js")(app);

app.listen(1111,()=>{
  console.log('servidor iniciado');
});
