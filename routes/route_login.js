const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const SingUpUser = require('../models/model_singup')

router.post('/', function(req, res) {
    let user = req.body

    SingUpUser.findOne({email: user.email}, (err, userDB) => {
        if(err){
            return res.json({
              ok: false,
              err
            })
        }
        if (!userDB) {
            return res.json({
                ok: false,
                err:{
                    value: 'email',
                    message: "Email incorrecto"
                }
            })
        }

        if(!bcrypt.compareSync(user.password, userDB.password)){
            return res.json({
                ok: false,
                err:{
                    value: 'password',
                    message: "Contraseña incorrecta"
                }
            })
        }

        res.json({
            ok: true,
            user: userDB
        })
    })
})


module.exports = router;