import { API_URL, SOCKET_URL } from "./config.js";
var socket = io(SOCKET_URL);
    socket.on("connect", function () {
      console.log("Conectado al servidor de Socket.IO");
    });
    socket.on("postToClient", function (post) {
      console.log("Nuevo post recibido:");
      console.log(post);
    });

    function sendMessage() {
      var title = document.getElementById("title").value;
      var post = document.getElementById("post").value;
      var author = document.getElementById("author").value;
      axios.post(API_URL, {
        title: title,
        content: post,
        authorId: Number(author),
      });

      document.getElementById("title").value = "";
      document.getElementById("post").value = "";
      document.getElementById("author").value = "";
    }

    document.querySelector("button").addEventListener("click", sendMessage);
