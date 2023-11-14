const socket = io();

let username = "";
let userList = [];
let loginPage = document.querySelector("#loginPage");
let chatPage = document.querySelector("#chatPage");
let loginNameInput = document.querySelector("#loginNameInput");
let chatTextInput = document.querySelector("#chatTextInput");

loginPage.style.display = "flex";
chatPage.style.display = "none";

loginNameInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let name = loginNameInput.value.trim();

    if (name != "") {
      username = name;
      document.title = `Chat (${username})`;

      socket.emit("join-request", {
        username: username,
      });
    }
  }
});

chatTextInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let message = chatTextInput.value.trim();
    chatTextInput.value = "";

    if(message != "") {
      addMessage("message", username, message);
      socket.emit("send-message", message);
    }
  }
})

function renderUserList() {
  let ul = document.querySelector(".userList");
  ul.innerHTML = "";

  userList.forEach((i) => {
    ul.innerHTML += `<li>${i.username}</li`;
  });
}

function addMessage(type, user, message) {
  let ul = document.querySelector(".chatList");

  switch (type) {
    case "status":
      ul.innerHTML += `<li class="m-status">${message}</li>`;
      break;
    case "message":
      if(username === user){
        ul.innerHTML += `<li class="m-txt"><span class="me">${user}:</span> ${message}</li>`;
      }
      else {
        ul.innerHTML += `<li class="m-txt"><span>${user}:</span> ${message}</li>`;
      }
      break;
  }
}

socket.on("user-ok", (list) => {
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
  chatTextInput.focus();

  addMessage("status", null, "Conectado!");

  userList = list;
  renderUserList();
});

socket.on("list-update", (data) => {
  if(data.joined) {
    addMessage("status", null, `${data.joined.username} entrou no chat!`)
  }
  if(data.left) {
    addMessage("status", null, `${data.left.username} saiu do chat!`)
  }

  userList = data.list;
  renderUserList();
});

socket.on("show-message", (data) => {
  addMessage("message", data.username.username, data.message)
})

socket.on("disconnect", () => {
  addMessage("status", null, "Você foi desconectado!");
  userList = [];
  renderUserList();
})

socket.on("connect_error", () => {
  addMessage("status", null, "Tentando reconectar...")
})

socket.on("connect", () => {
  addMessage("status", null, "Reconectado!");

  if(username !== "") {
    socket.emit("join-request", {username: username})
  }
})