const { createServer } = require('http');
const { Server } = require('socket.io');
const { setInterval } = require('timers/promises');

const httpServer = createServer();
const socket = new Server(httpServer, {
    cors:{
        origin: "http://localhost:5173",
    }
});

let playerScores = [];

socket.on('connection', (socket) => {
    socket.on('message', (data) => {
        playerScores.push(data);
        console.log(data);
        socket.emit("playerScores", playerScores);
    });
    
    setInterval(() => {
        socket.emit("playerScores", playerScores);        
    }, 5000);

});

httpServer.listen(3000, ()=>{
    console.log('Server is Running');
    
})