const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require ('../config/secrets');

module.exports = {
    register (req, res) {
        let salt = bcrypt.genSaltSync(10);
        let hashedPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            salt: salt,
            birthday: req.body.birthday
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    login (req, res)    {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user =>   {
                if(!user)   {
                    return res.status(401).send({message: 'No records match' })
                }
                let input = bcrypt.hashSync(req.body.password, user.salt);
                if (input === user.password)    {
                    let token = jwt.encode({ id: user.id, username: user.username}, appSecrets.jwtSecret);
                    return res.status(201).send(token)
                } else  {
                    return res.status(401).send({message: 'No records match'})
                }
            })
            .catch(error => res.status(400).send(error));
    }
};