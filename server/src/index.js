const express = require("express");
const bodyParser = require("body-parser");

import {
    login
} from "./middleware/auth";


const app = express();
const port = 12345;




app.use(bodyParser.json());
app.post('/login', login);




app.listen(port, () => {
    console.log("serveur 🚀🚀");
});