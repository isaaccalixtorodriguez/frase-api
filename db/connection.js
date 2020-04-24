const mongoose = require('mongoose');


mongoose.connect('mongodb://192.168.10.10/frase', (err, res) => {
    if (err) throw err
    console.log('Exito en la conexion a la base de datos')
});
