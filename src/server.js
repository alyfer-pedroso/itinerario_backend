const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

require("dotenv").config({ path: ".env" });

const router = require("./router");
const server = express();

server.use(cors());
server.use(bodyparser.urlencoded({ extended: false }));
server.use(express.json());
server.use("/api", router);

server.listen(process.env.PORT, () => {
  console.log(`Server is running in http://localhost:${process.env.PORT}`);
});
