const postDB = require("../../data/postDB");

/**
 * insert newly added post in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.insertPost = function (req, res) {
  postDB.insertPost(req, res);
};

/**
 * fetch the post in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.fetchPost = function (req, res) {
  postDB.fetchPost(req, res);
};

exports.updatePostByLikes = function (req, res) {
  postDB.updatePostByLikes(req, res);
};

exports.fetchPostByID = function (req, res) {
  postDB.fetchPostByID(req, res);
};

exports.fetchAllPost = function (req, res) {
  postDB.fetchAllPost(req, res);
};
