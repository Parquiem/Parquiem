const express = require("express");
const io = require("socket.io");
const router = express.Router();


/**
 * TODO: 
 *  -Cambiar el código de isOcuppiedESP, por si llegase a estar desocupado convertir el tiempo y enviar a la base de datos
 */
io.on('connection', (socket) => {
    // Evento lanzado por parte del ESP32
    socket.on('isOccupiedESP', data => {
        //Evento lanzado para el cliente
        socket.emit('isOcuppiedClient', data);
    });

    //Evento lanzado por parte del cliente lanzando los tiempos
    socket.on('tiempos', data => {
        //Evento para el ESP32, recibira y mostrar el tiempo
        socket.emit('tiempoESP', data);
    });
});

module.exports = router;