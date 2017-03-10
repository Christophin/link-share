const Link = require('../models').Link;

module.exports = {
    postLink (req, res) {
        Link.create({
            title: req.body.title,
            url: req.body.url,
            content: req.body.content,
            user_id: req.body.user_id
        })
            .then(link => res.status(201).send(link))
            .catch(error => res.status(400).send(error));
    },
    getLinks (req, res) {
        Link.findAll({
            order: [ ['createdAt', 'DESC'] ]
        })
            .then(links => res.status(201).send(links))
            .catch(error => res.status(400).send(error));
    }
};