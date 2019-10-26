const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'wpUJyUrvdn5z5b7_zGj8XkA6ZKHNYuZ9DppW7itUVu0L',
  }),
  url: 'https://gateway-lon.watsonplatform.net/assistant/api',
});

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

const port = 12345;

const app = express();
app.use(cors());

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


app.post("/assistant/test", (req, res) => {
  let input= {};
  if(req.body.input){
    input = {
      'message_type': 'text',
      'text': req.body.input
      }
  }
  
  assistant.createSession({
  assistantId: 'b39a83ff-d751-4605-b88e-be79a54554cd'
})
  .then(respond => {
    const sessionID = respond.result.session_id; 
    assistant.message({
      assistantId: 'b39a83ff-d751-4605-b88e-be79a54554cd',
      sessionId: sessionID,
      input
      })
      .then(respond => {
        console.log(JSON.stringify(respond, null, 2));
        res.send(JSON.stringify(respond, null, 2))
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });})


app.listen(port, () => {
  console.log("serveur 🚀🚀");
});