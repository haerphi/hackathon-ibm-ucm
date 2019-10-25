export const search = (req, res) => {
    res.send("rechercher");
    console.log(req.params.entity);
}