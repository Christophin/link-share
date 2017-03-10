const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');
const CommentController = require('../controllers/comment');

module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);
  app.get('/links/:id/', LinkController.getLinks);
  app.post('/links', LinkController.postLink);
  app.get('/links/:id/comments', CommentController.getComments);
  app.post('/links:id/comments', CommentController.addComment);
};
