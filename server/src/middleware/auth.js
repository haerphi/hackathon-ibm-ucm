import {
    sign
} from "crypto";

const jwt = require("jsonwebtoken");

export const login = (req, res) => {

    console.log(req.body.username);
    if (req.body.username === "admin" && req.body.password === "admin") {
        // res.send("you are login");
        const user = {

            id: 0,
            pseudo: "name",
            id_user_type_fk: 2,

        };
        const token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: '24h',
        });
        res.send(token);

    } else {
        res.send("Error in login");
    }
}

export const isLogin = (req, res, next) => {

    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        next();
    } catch (err) {
        res.send({
            error: err.message
        });
    }

}