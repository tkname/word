var express = require('express'); 
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use('/', express.static(__dirname + '/public')); 

server.listen(8084);

var userId=0;

//socket部分
io.on('connection', function(socket) {

    //接收并处理客户端的hi事件
    socket.on('hi', function(data) {
        console.log(data);
        // console.log(messageArray);
        io.sockets.emit('c_hi',data)
        //触发客户端事件c_hi
        // socket.emit('c_hi',messageArray)
    })

    //用户创建自定义的用户id
    socket.on('getUserId', function(data) {
        userId++;
        socket.emit('userId',userId)
    })

    //断开事件
    socket.on('disconnect', function(data) {
        console.log('断开',data)
        socket.emit('c_leave','离开');
        //socket.broadcast用于向整个网络广播(除自己之外)
        //socket.broadcast.emit('c_leave','某某人离开了')
    })

});
