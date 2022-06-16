const express = require("express");
const cors = require("cors");
const chats = require("./data/data");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World vvvvvvvvvvvvvvvvvvvvvvv!");
});


app.get("/api/chat", (req, res) => {
  res.send(chats);
});


app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
}
);

app.listen(port, () => {
  console.log(`Chat app listening on port ${port}!`);
});
