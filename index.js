const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chats = require("./data/data");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World vvvvvvvvvvvvvvvvvvvvvvv!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.use("/api/user", userRoutes);

app.user(notFound);
app.user(errorHandler);

app.listen(port, () => {
  console.log(`Chat app listening on port ${port}!`);
});
