const ContentPage = require("../../models/contentPageModel");

/**
 * fetch the contentpage fields for the 
 * particular movie/show from the database
 * @param {*} req - request the movie/show id from the front end
 * @returns - return the fetched data from the mongoDB
 */
function contentDB(req) {
  let contentInfoResponse = {};
  contentInfoResponse = ContentPage.findOne({ movie_show_id: req });

  return contentInfoResponse;
}
/**
 * The module is being exported as 'contentDB' so that this module can be imported into other modules. 
 */
module.exports = contentDB;
