const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');

    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })

        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL'
            });
        }*/

    })
});