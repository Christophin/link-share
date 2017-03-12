const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');
const CommentController = require('../controllers/comment');
const middleware = require('../middleware');

module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);

  app.get('/links', LinkController.getLinks);
  app.post('/links', middleware.authenticate, LinkController.postLink);

  app.delete('/links/:id', middleware.authenticate, LinkController.deleteLink);
  app.get('/links/:id/comments', CommentController.getComments);
  app.post('/links/:id/comments', middleware.authenticate, CommentController.addComment);
};
