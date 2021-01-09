const { io } = require('../server');

io.on('connection', (client) => { //Cuando un usuario se conceta a la aplicación
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Welcome to aplication'
    });


    client.on('disconnect', () => { //Cuando un usuario se desconecta de la aplicación
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => { //El nombre igual a la variable que se puso en el backend
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

        // if (msn.usuario) {
        //     callback({
        //         response: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         response: 'Todo salio mal!!!'
        //     });
        // }
    })
})