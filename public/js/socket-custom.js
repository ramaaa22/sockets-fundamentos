var socket = io();
//socket on es para escuchar informacion
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('se ha perdido la conexion');
});

//socket emit es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Ramiro',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

//Socket para recibir mensaje del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});