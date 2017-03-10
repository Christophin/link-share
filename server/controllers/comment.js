const Comment = require('../models').Comment;

module.exports = {
    getComments (req, res)  {
        Link.findOne({
            where:  {
                id: req.params.id
            }
        })
            .then(link =>   {
                if (!link)  {
                    return res.status(401).send({message: "This link does not appear to exist"})
                }
                Comment.findAll({
                    where:  {
                        link_id: link.id
                    }
                })
                    .then(comments =>   {
                        if (!comments)  {
                            return res.status(401).send({message: "This link ha no comments"})
                        } else {
                            return res.status(200).send(comments)
                        }
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};