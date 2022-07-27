require("dotenv").config();

const express = require("express");
const requestIp = require("request-ip");

const app = express();

const route = require("./routes/route");

app.use(requestIp.mw());

app.use("/", route);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`running on port ${port}`));
