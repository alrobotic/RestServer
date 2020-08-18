const express = require("express");

const mongoose = require("mongoose");

const path = require("path");

const app = express();

const defaultMongoose = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

require("./config/config.js");

// app.use(require("./routes/usuario"));
app.use(require("./routes/index"));

// habilita la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));

mongoose.connect(process.env.URLDB, defaultMongoose, (err, resp) => {
  if (err) {
    throw err;
  }

  console.log("Base de datos ONLINE");
});

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`));
