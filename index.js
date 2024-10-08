"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/portafolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexion a la base de datos establecida satifastoriamente...");

    // Creacion del servidor
    app.listen(port, () => {
      console.log("Servidor corriendo correctamente en la url: localhost:3700");
    });
  })
  .catch((err) => console.log(err));
