const commentRouter = require("express").Router();
const commentService = require("../../middleware/commentService");
/**
 * This router is to create a POST API for inserting a comment. This API can be tested on Postman
 * with route '/comments/createComment' at the end of the server_url.
 */
commentRouter.post("/createComment", commentService.insertComment);
/**
 * This router is to create a POST API for fetching comments. This API can be tested on Postman
 * with route '/comments/comment' at the end of the server_url.
 */
commentRouter.post("/comment", commentService.fetchComment);
/**
 * This router is to create a POST API for deleting a comment. This API can be tested on Postman
 * with route '/comments/deleteComment' at the end of the server_url.
 */
commentRouter.post("/deleteComment", commentService.deleteComment);
/**
 * This router is to create a POST API for updating a comment. This API can be tested on Postman
 * with route '/comments/updateComment' at the end of the server_url.
 */
commentRouter.post("/updateComment", commentService.updateComment);
/**
 * The module is being exported as router
 * so that this module can be imported into other modules.
 */
module.exports = commentRouter;
