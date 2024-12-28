const { log } = require('console');
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const {v4:uuid} = require('uuid');

const app = express();
const httpServer = createServer(app);

const serverIO = new Server(httpServer,{
    cors:{
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        credentials: true
    }
})

httpServer.listen(3000, function(){
    console.log("Server is running");
});

let todoList = [];

const todoListNameSpace = serverIO.of('/todo');
todoListNameSpace.on("connection", function(socket){
    console.log('New connection established');
    // console.log(socket);
    
    socket.emit('update', todoList);
    
    socket.on('newItem', function(item){
        const id = uuid();
        const todoItem = {
            id : id,
            value : item
        };
        console.log("UUID" + id + "NewItem" + item);
        todoList.push(todoItem);
        todoListNameSpace.emit('update', todoList);
    });

    socket.on('updateItem', function(item){
        const index = todoList.findIndex(obj => obj.id == item.id);
        if(index != -1){
            console.log(index);
            console.log(todoList[index]);
            
            todoList[index].value = item.value;
            todoListNameSpace.emit('update', todoList)
        }
    });

    socket.on('deleteItem', function(itemId){
        todoList = todoList.filter(obj=>obj.id != itemId);
        todoListNameSpace.emit('update', todoList);
    });

    socket.on('disconnect', function(){
        console.log("Client Disconnected");
    })
});