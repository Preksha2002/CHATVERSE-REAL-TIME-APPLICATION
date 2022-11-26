const io = require('socket.io')(8001)

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{ 
        console.log("New User",name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });
    socket.on('send', (message,newColor) =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id],newColor:newColor})
    });
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });



})
