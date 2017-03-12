const Comment = require('../models').Comment;
const Link = require('../models').Link;

module.exports = {
    addComment (req, res)   {
        Comment.create  ({
            link_id: req.params.id,
            user_id: req.user.id,
            content: req.body.content
        })
            .then(comment => res.status(200).send(comment))
            .catch(error => res.status(400).send(error));
    },
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
    },
    deleteComment(req, res) {
        Comment.destroy({
            where: {
                link_id: req.params.id,
                id: req.params.comId,
                user_id: req.user.id
            }
        })
            .then(dest_rows => res.status(201).send('you successfully deleted this comment'))
            .catch(error => res.status(400).send(error));
    }
};