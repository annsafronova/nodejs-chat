var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	// res.send('<h1>Hello World</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		// console.log('message: ' + msg);
		io.emit('chat message', msg); // so all users can see messages
	});
});

http.listen(3000, function(){
	console.log('Listening on *:3000');
});