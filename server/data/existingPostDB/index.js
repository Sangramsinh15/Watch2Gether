const ExistingPost = require("../../models/existingPostModel/");

/**
 * Function to fetch the existing posts
 * related to a movied based on the movie id
 * @param {*} req
 * @returns
 */
function existingPostDB(req) {
  let existingPostResponse = {};
  existingPostResponse = ExistingPost.findOne({ movie_show_id: req });

  return existingPostResponse;
}
/**
 * The module is being exported as 'existingPostDB' so that this module can be imported into other modules.
 */
module.exports = existingPostDB;
