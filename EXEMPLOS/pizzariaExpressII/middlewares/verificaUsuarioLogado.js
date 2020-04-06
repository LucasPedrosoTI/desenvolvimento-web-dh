module.exports = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.render("crud-adm/login", {error: "Favor realizar login"})
    }
}