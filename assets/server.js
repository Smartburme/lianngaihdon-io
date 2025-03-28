const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/chat_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const messageSchema = new mongoose.Schema({
    name: String,
    message: String,
});

const Message = mongoose.model("Message", messageSchema);

app.get("/messages", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.post("/messages", async (req, res) => {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ status: "Message Saved!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
