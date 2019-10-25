const express = require("express");
const bodyParser = require("body-parser");

import { login } from "./middleware/auth";
import { loginBD } from "./bd/userrequest";

const app = express();
const port = 12345;

app.use(bodyParser.json());
app.post("/login", login);

app.get("/test", async (req, res) => {
  const rep = await loginBD();
  console.log(rep);
  res.send(rep);
});

app.listen(port, () => {
  console.log("serveur 🚀🚀");
});
