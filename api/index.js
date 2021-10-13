const express = require("express");
const routesHandler = require("./routes/handler.js");
require("dotenv/config");

const server = express();
server.use(express.json());
server.use("/", routesHandler);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`)
})