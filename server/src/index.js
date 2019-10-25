const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

import { login } from "./middleware/auth";
import {
  loginBD,
  getPathSteps,
  getLegalStatus,
  getSelfEmployedStatus,
  getJobDomains,
  getCategories
} from "./bd/userrequest";

import { search } from "./middleware/question";

const app = express();

const port = 12345;

app.use(bodyParser.json());

app.post("/login", login);
app.use(session({ secret: "ssshhhhh" }));

let sess;

app.get("/", (req, res) => {
  sess = req.session;
  if (sess.email) {
  }
});

app.get("/api/pathsteps", async (req, res) => {
  const rep = await getPathSteps();
  res.send(rep);
});

app.get("/api/legalstatus", async (req, res) => {
  const rep = await getLegalStatus();
  res.send(rep);
});

app.get("/api/selfemplyedstatus", async (req, res) => {
  const rep = await getSelfEmployedStatus();
  res.send(rep);
});

app.get("/api/jobdomains", async (req, res) => {
  const rep = await getJobDomains();
  res.send(rep);
});

app.get("/api/categories", async (req, res) => {
  const rep = await getCategories();
  res.send(rep);
});
app.post("/api/login", async (req, res) => {
  let login = req.body.login;
  let password = req.body.password;
  const rep = await loginBD(login, password);
  res.send(rep);
});
app.listen(port, () => {
  console.log("serveur 🚀🚀");
});
