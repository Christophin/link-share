Back-end for a link sharing system.

API Documentation:

*note* all requests must have a 'Content-type' header with a 'application/x-www-form-urlencoded'
value.

Any user may GET at '/links' to retrieve currently posted links.

Any user may GET at '/links:id/comments' to retrieve comments for a certain
link where :id is the desired links id.

Any user may GET at '/links:id/votes' to retrieve the votes for a certain link where
:id is the desired links id.

Any user may POST at '/users' to register as a user.
    required in the body is:
    username:string,
    email:string,
    password:string
    there is also an optional 'birthday' key, which is a mmddyy integer.

Any registered user may POST at '/login' to receive an authentication token.
 required in the body is:
    email:
    password:

You will then be passed back an authentication token which must be placed in
the headers of any request requiring authentication. It should be given a key of 'access-token'

Any authenticated user can POST to '/links' to create a new link.
 required in the body is:
  title:(title of your link)string,
  url:(url to link)string,
  there is also an options key 'content':for comments about your link which is a text field.

Any authenticated user can DELETE to '/links/:id' to delete they created.

Any authenticated user can POST to '/links/:id/comments' to add a comment to a link.
required in the body is:
    content:text

Any authenticated user can DELETE to '/links/:id/comments/:comId' to delete on of their comments.

Any authenticated user can POST to './links/:id' to vote on a link.
required in the body is:
vote:boolean(true for upvote, false for downvote)

