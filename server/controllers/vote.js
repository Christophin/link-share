const Vote = require('../models').Vote;

module.exports = {
    addVote (req, res)  {
        Vote.findAll({
            where:  {
                link_id: req.params.id,
                user_id: req.user.id
            }
        })
            .then(votes =>  {
                if (votes.length > 0)   {
                    res.status(401).send({
                        message: 'You have already voted on this link.'
                    });
                }
                Vote
                    .create ({
                        link_id: req.params.id,
                        user_id: req.user.id,
                        vote: req.body.vote})
                    .then(vote => res.status(200).send(vote))
            })
            .catch(error => res.status(400).send(error))
    },
    getVotes (req, res) {
        Vote.findAll({
            where:  {
                link_id: req.params.id
            }
        })
            .then(votes => res.status(200).send(votes))
            .catch(error => res.status(200).send(error));
    }
};