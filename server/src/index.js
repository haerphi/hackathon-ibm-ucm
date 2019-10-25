const express = require("express");
const bodyParser = require("body-parser");


import {
    login,
    isLogin
} from "./middleware/auth";

import {
    search
} from "./middleware/question";

const app = express();
const port = 12345;

app.use(bodyParser.json());

app.post('/login', login);
app.get('/search', search);
app.use(isLogin);

app.get("/test", async (req, res) => {
  const rep = await loginBD();
  console.log(rep);
  res.send(rep);
});

app.listen(port, () => {
  console.log("serveur 🚀🚀");
});
