const express = require("express");

const mongoose = require("mongoose");

const app = express();

const defaultMongoose = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

require("./config/config.js");

// app.use(require("./routes/usuario"));
app.use(require("./routes/index"));

mongoose.connect(process.env.URLDB, defaultMongoose, (err, resp) => {
  if (err) {
    throw err;
  }

  console.log("Base de datos ONLINE");
});

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`));
