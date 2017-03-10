const UserController = require('../controllers/user');
const LinkController = require('../controllers/link')

module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);
  app.get('/links', LinkController.getLinks);
};
