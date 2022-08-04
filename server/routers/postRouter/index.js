const postRouter = require("express").Router();
const postService = require("../../middleware/postService");
/**
 * This router is to create a POST API for inserting a post into mongoDB.
 * This API can be tested on Postman
 * with route '/pt/createPost' at the end of the server_url.
 */
postRouter.post("/createPost", postService.insertPost);

/**
 * This router is to create a POST API for fetchng the posts from the mongo database.
 * This API can be tested on Postman
 * with route '/pt/Post' at the end of the server_url. */
postRouter.post("/post", postService.fetchPost);

postRouter.post("/likePostCount", postService.updatePostByLikes);

postRouter.post("/fetchPostByID", postService.fetchPostByID);

postRouter.post("/fetchAllPost", postService.fetchAllPost);

/**
 * The module is being exported as router
 * so that this module can be imported into other modules.
 */
module.exports = postRouter;
