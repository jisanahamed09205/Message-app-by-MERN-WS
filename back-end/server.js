const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const {Server} = require('socket.io')
const io = new Server(expressServer);
const path = require ('path')


app.use(express.static('../../C-Message by MERN & WS/front-end/build'))



app.get('*', function(req,res){
    res.sendFile(path.resolve(__dirname,'../../C-Message by MERN & WS/front-end','build','index.html'))
})



io.on('connection', function(socket){
    console.log('New User Connected');


    setTimeout(function(){
        socket.emit('msg','This message from Server')
    },5000)


    socket.on('disconnect', function(){
        console.log('User Disconnected');
    })
})

expressServer.listen(5000,function(){
    console.log('Server Run @ 5000');
})