const path = require('path');
const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
const {
  getQuestion
} = require('./utils/questions');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Trivia Game Bot';
const maxRoomSize = 8;
var publicRooms = [];
var privateRooms = [];

// Run when client connects
io.on('connection', socket => {

  socket.on('createRoom', ({ match_type }) => {
    room = generateRoomCode(4)
    if (match_type == "private") {
      privateRooms.push(room)
    }
    else {
      publicRooms.push(room)
    }
    socket.emit("roomFound", room)
  });

  socket.on('getRoom', ({ match_type, username, room }) => {
    if (match_type == "private") {
      if (privateRooms.includes(room)) {
        socket.emit("roomFound", room);
      } else {
        socket.emit("roomNotFound", match_type);
      }
    }
    else {
      var foundRoom = false;
      var i;
      for (i = 0; i < publicRooms.length; i++) {
        if (getRoomUsers(publicRooms[i]).length < maxRoomSize) {
          foundRoom = true;
          socket.emit("roomFound", publicRooms[i]);
        }
      }
      if (!foundRoom) {
        socket.emit("roomNotFound", match_type);
      }
    }
  });

  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to Trivia Game!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });

    getQuestion("Physics")
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });

      if (getRoomUsers(user.room).length < 1) {
        if (privateRooms.includes(room)) {
          privateRooms = privateRooms.filter(privateRoom => privateRoom != room)
        } else {
          publicRooms = publicRooms.filter(publicRoom => publicRoom != room)
        }
      }
    }
  });
});

function generateRoomCode(length) {
  do {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  } while (privateRooms.includes(result) || publicRooms.includes(result));

  return result;
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));