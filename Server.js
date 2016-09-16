//Server 
var handler = function(req, res) {
    fs.readFile(__dirname+'/client.html', function (err, data) {
        if(err) throw err;
        res.writeHead(200);
        res.end(data);
    });
}

var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var port = 8888;

app.listen(port);

io.sockets.on('connection', function (socket) {
	socket.on('drawCircle', function(data, sessionId){
		socket.broadcast.emit('drawCircle',data,sessionId);
	});
});