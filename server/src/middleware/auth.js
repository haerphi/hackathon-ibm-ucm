export const login = (req, res) => {

    console.log(req.body.username);
    if (req.body.username === "admin" && req.body.password === "admin") {
        res.send("you are login");

    } else {
        res.send("Error in login");
    }
    //id_user_type_fk



}