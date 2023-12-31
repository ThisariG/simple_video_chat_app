const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Running");
});

io.on("connection", (socket) => { 
  socket.emit("me", socket.id); //id of the caller

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded"); //call ended
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name }); //call user
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal); //call accepted
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));