const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
import { login, isCommunity } from "./middleware/auth";
import {
  getPathSteps,
  getLegalStatus,
  getSelfEmployedStatus,
  getJobDomains,
  getCategories
} from "./bd/userrequest";

import { api_question } from "./bd/crud";
import { search } from "./middleware/question";

const app = express();

const port = 12345;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  if (req.email) {
    // Authentifié
  }
});

app.post("/login", login);

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

app.post("/api/question", isCommunity, async (req, res) => {
  //console.log(req.body);
  let action = req.body.action;
  let question = req.body.question;
  let id_user = req.body.id_user;
  let comments = req.body.comments;
  let status = req.body.status;
  let id = req.body.id;

  const rep = await api_question(
    action,
    question,
    id_user,
    comments,
    status,
    id
  );
  //console.log(rep);
  res.send(action);
});

app.listen(port, () => {
  console.log("serveur 🚀🚀");
});
