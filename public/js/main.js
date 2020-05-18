const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const usernameRequired = document.getElementById('usernameRequired');
const roomRequired = document.getElementById('roomRequired')

const webaddress = "http://localhost:3000";
const create_private_room_api = webaddress + "/api/create_private_room";
const join_game_api = webaddress + "/api/join_game";

const socket = io();

// POST REQUEST
function createRoom(match_type) {
  let username = document.forms["sessionInfo"]["username"].value;

  if (username == "") {
    usernameRequired.innerText = "A nickname is required";
    usernameRequired.style.color = "#CCCC00";
  }
  else {
    usernameRequired.innerText = "";
    socket.emit('createRoom', { match_type } )
  }
}

// POST REQUEST
function joinGame() {
  let match_type = document.forms["sessionInfo"]["match-type"].value;
  let username = document.forms["sessionInfo"]["username"].value;
  let room = document.forms["sessionInfo"]["room"].value;

  if (validateForm(match_type, username, room)) {

    // Join chatroom
    socket.emit('getRoom', { match_type, username, room });
  }
}

function showPrivateOptions(classId, element) {
  let collection = document.getElementsByClassName(classId)
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = element.value == 'private' ? 'block' : 'none';
  }
}

function validateForm(match_type, username, room) {
  let passed = true;
  if (match_type == "private") {
    if (username == "") {
      usernameRequired.innerText = "A nickname is required";
      usernameRequired.style.color = "#CCCC00";
      passed = false;
    }
    else {
      usernameRequired.innerText = "";
    }
    if (room == "") {
      roomRequired.innerText = "A room code is required";
      roomRequired.style.color = "#CCCC00";
      passed = false;
    }
    else {
      roomRequired.innerText = "";
    }
  } else {
    if (username == "") {
      usernameRequired.innerText = "A nickname is required";
      usernameRequired.style.color = "#CCCC00";
      passed = false;
    }
    else {
      usernameRequired.innerText = "";
    }
  }
  return passed
}

socket.on('roomFound', room => {
  let username = document.forms["sessionInfo"]["username"].value;

  let join_collection = document.getElementsByClassName('join-container')
  for (let i = 0; i < join_collection.length; i++) {
    join_collection[i].style.display = 'none';
  }
  let chat_collection = document.getElementsByClassName('chat-container')
  for (let i = 0; i < chat_collection.length; i++) {
    chat_collection[i].style.display = 'block';
  }

  socket.emit('joinRoom', {username, room});
});

socket.on('roomNotFound', match_type => {
  if (match_type == "private") {
    roomRequired.innerText = "Not a valid room code";
    roomRequired.style.color = "#CCCC00";
  } else {
    roomRequired.innerText = "";
    createRoom('public')
  }
});

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map(user => { 
      if (user.username == document.forms["sessionInfo"]["username"].value) {
        return `<li>${user.username} (You)</li>`
      }
      else {
        return `<li>${user.username}</li>`
      }
    }).join('')}
  `;
}