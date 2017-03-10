const Link = require('../models').Link;

module.exports = {
    getLinks (req, res) {
        Link.findAll({
            order: [ ['createdAt', 'DESC'] ]
        })
            .then(links => res.status(201).send(links))
            .catch(error => res.status(400).send(error));
    }
};