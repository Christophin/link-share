const Link = require('../models').Link;

module.exports = {
    postLink (req, res) {
        Link.create({
            title: req.body.title,
            url: req.body.url,
            content: req.body.content,
            user_id: req.user.id
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
    },
    deleteLink(req, res) {
        Link.destroy({
            where: {
                id: req.params.id,
                user_id: req.user.id
            }
        })
            .then(dest_rows => res.status(201).send('you successfully deleted this link'))
            .catch(error => res.status(400).send(error));
    }
    // popularLinks    (req, res)  {
    //     let currentTime = new Date().getTime();
    //     let votes = 0;
    //     Link.findAll({})
    //         .then(function (links)  {
    //             for (var i = 1; i < links.length; i++)  {
    //                 Vote.findAll({
    //                     where:  {
    //                         link_id: i
    //                     }
    //                 })
    //                     .then(vote =>  {
    //                         for (var j = 1; j < vote.length; j++)  {
    //                             if (vote[j].vote)  {
    //                                 votes += 1;
    //                             }
    //                             if (vote[j].vote === false) {
    //                                 votes -= 1
    //                             }
    //                         }
    //                     })
    //             }
    //         })
    // }
};