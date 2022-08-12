require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log("server is now listening on port: ", PORT);
});
