const commentDB = require("../../data/commentDB");

/**
 * Insert newly added comment in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.insertComment = function (req, res) {
  commentDB.insertComment(req, res);
};

/**
 * Fetch the comment in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
exports.fetchComment = function (req, res) {
  commentDB.fetchComment(req, res);
};

/**
 * Update the comment in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
 exports.updateComment = function (req, res) {
  commentDB.updateComment(req, res);
};

/**
 * Delete the comment in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
 exports.deleteComment = function (req, res) {
  commentDB.deleteComment(req, res);
};
