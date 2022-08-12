const express = require("express");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, name: "Harry Potter", bio: "the boy who lived" },
      { id: 2, name: "Ron Wessley", bio: "a great friend" },
      { id: 3, name: "Hermione Granger", bio: "brightest witch of her age" },
    ],
  });
});

module.exports = server;
