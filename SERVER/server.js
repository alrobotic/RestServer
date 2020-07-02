const app = require('./routes/usuario');

const mongoose = require('mongoose');
const defaultMongoose = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
};

require('./config/config.js');


mongoose.connect(process.env.URLDB, defaultMongoose, (err, resp) => {

    if (err) throw err;

    console.log("Base de datos ONLINE");

})

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`));