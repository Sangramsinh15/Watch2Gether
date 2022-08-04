const watchGroupDB = require("../../data/watchGroupDB/index");

/**
 * This function serves as a middleware for inserting post in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.insertWatchGroup = function (req, res) {
  watchGroupDB.insertWatchGroup(req, res);
};
/**
 * This function serves as a middleware for fetching post in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.fetchWatchGroup = function (req, res) {
  watchGroupDB.fetchWatchGroup(req, res);
};
/**
 * This function serves as a middleware for fetching post by user in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.fetchWatchGroupByUser = function (req, res) {
  watchGroupDB.fetchWatchGroupByUser(req, res);
};
/**
 * This function serves as a middleware for fetching post by groupid in discussion thread by user
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */

exports.fetchByWatchGroupID = function (req, res) {
  watchGroupDB.fetchByWatchGroupID(req, res);
};

exports.fetchWatchGroupByUserIDGroupID = function (req, res) {
  watchGroupDB.fetchWatchGroupByUserIDGroupID(req, res);
};

exports.updateWatchGroupByUser = function (req, res) {
  watchGroupDB.updateWatchGroupByUser(req, res);
};
