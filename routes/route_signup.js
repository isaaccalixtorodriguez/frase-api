const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const SingUpUser = require('../models/model_singup')

router.post('/', function(req, res) {
  let body = req.body
  let user = new SingUpUser({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10) 
  })

  user.save((err, userdb) => {
    if(err){
      return res.json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      user: userdb
    })
  })
})


module.exports = router;

