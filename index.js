const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("server running");
});

app.listen(process.env.PORT || 3000,process.env.IP);
