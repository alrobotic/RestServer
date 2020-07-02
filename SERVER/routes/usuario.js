const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();

//const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    
    let desde = Number(req.query.desde || 0);
    let limite = Number(req.query.limite || 5);
    let estado = {
        estado: true
    }

    Usuario.find( estado, 'nombre email estado')
            .limit(limite)
            .skip(desde)
            .exec( (err, usuarioDB) => {

                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    })
                }

                Usuario.countDocuments( estado, (err, count) => {

                    res.json({
                        ok: true,
                        usuarioDB,
                        conteo: count
                    });
                })


            })
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
        // estado: body.estado,
        // google: body.google
    });

    usuario.save( (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    let body = _.pick( req.body, ['nombre', 'email', 'img', 'role', 'estado'] );

    Usuario.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err,usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

app.delete('/usuario/:id', (req, res) => {
    
    let id = req.params.id;
    
    // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
    Usuario.findByIdAndUpdate(id, {estado: false}, {new: true},(err, usuarioBorrado) => {
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };

        // if (!usuarioBorrado) {
        //         return res.status(400).json({
        //             ok: false,
        //             err: {
        //                 message: "El usuario no ha sido encontrado"
        //             }
        //         });
        // };
        
        res.json({
            ok: true,
            estado: usuarioBorrado
        });
    });

});



module.exports = app;