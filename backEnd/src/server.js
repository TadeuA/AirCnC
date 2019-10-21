const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');//importar todas as rotas

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

//conectar DB ao servidor
mongoose.connect('mongodb+srv://admin:qualquertexto@oministak-gmmtl.mongodb.net/semana09?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true
});


io.on('connection', socket =>{
    const { user_id } = socket.handshake.query;
   
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io; 
    req.connectedUsers = connectedUsers;

    return next();
});
//metodos de acesso a rotas GET, POST, PUT, DELETE
//GET req.query = Acessar query parament(para filtros)
//PUT/DELETE req.params = Acessar rout params (para edição, delete)
//POST req.body = Acessar corpo da requisição (para ciração, edição)
app.use(cors());
app.use(express.json());//Express ler em json
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

-
server.listen(3333);  