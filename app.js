const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
  console.log("usuario accedio a home");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
  console.log("usuario accedio a register");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
  console.log("usuario accedio a login");
});
