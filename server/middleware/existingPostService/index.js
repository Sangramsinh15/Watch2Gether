const existingPostDB = require("../../data/existingPostDB/index");
/**
 * Function to serve as a middleware for the existingPost page, 
 * to be used in existingPageRouter
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
function existingPostService(req) {
  return existingPostDB(req);
}
/**
 * The module is being exported as 'existingPostService'
 * so that this module can be imported into other modules. 
 */
module.exports = existingPostService;
