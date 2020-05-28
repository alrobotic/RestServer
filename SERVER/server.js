const express = require('express');
const bodyParser = require('body-parser');
require('./config/config.js');

const app = express();

//const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json("get usuario");
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            message: "El nombre es necesario"
        })
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json("delete usuario");
});

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`));