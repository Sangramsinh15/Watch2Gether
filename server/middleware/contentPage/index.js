const contentPageDB = require("../../data/contentPageDB");
/**
 * Function to serve as a middleware for the content page, 
 * to be used in contentRouter
 * @param {*} req - request from the front end
 * @param {*} res - response sent to the view
 */
function contentPageService(req) {
  return contentPageDB(req);
}
/**
 * The module is being exported as 'contentPageService'
 * so that this module can be imported into other modules. 
 */
module.exports = contentPageService;
