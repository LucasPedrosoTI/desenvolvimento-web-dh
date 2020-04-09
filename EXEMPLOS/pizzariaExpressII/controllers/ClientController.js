const clients = require('../database/clients.json');

module.exports = {
    index: (req, res) => {
        res.render("crud-clients/list", { clients });
    },
}