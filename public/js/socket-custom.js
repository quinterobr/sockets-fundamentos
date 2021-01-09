var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('concetado al servidor');
});
socket.on('disconnect', function() { //Cuando se pierde la conexión con el servidor
    console.log('Se perdio conexion con el servidor');
});

//Los emits son para enviar información la servidor
socket.emit('enviarMensaje', { // Evento
    usuario: 'brahian', //objeto
    message: 'Hola mundo con sockets'
}, function(resp) { //Funcion de respuesta 
    console.log('Respuesta server:', resp);
});
//Escuchar informacion
socket.on('enviarMensaje', function(msn) {
    console.log('Servidor', msn);
});