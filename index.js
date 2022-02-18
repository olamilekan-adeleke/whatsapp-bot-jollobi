const express = require("express");
const botResponseController = require("./controllers/bot_response_controller");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bot", botResponseController);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
