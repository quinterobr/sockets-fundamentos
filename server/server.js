const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public'); //Con esto hagago que la carpeta public y su contenido sean publicas
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//mantiene  la comunicación con el backend
module.exports.io = socketIO(server);
require('./sockets/socket'); //Le digo a server que use el socket

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});