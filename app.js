var express=require("express");
var app=express();
var socket=require("socket.io");
app.use(express.static("public"));
var server=app.listen(1234,function(){
console.log("server started")    
}
)
var io=socket(server);
io.sockets.on('connection',function(socket){
    console.log("connected");
    socket.on('location',function(data){
        io.sockets.emit('map',data);
    })
})