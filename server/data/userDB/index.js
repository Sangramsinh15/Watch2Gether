const User = require("../../models/userModel");
/**
 * This function does all the operations on users collection
 * to find the email that's sent from another function.
 * @param {*} req : The request passsed as a parameter to the function userDB
 * @returns : The function returns the User model
 * associated with the  email foung in the database
 */
function userDB(req) {
  let userInfoResponse = {};
  userInfoResponse = User.findOne({ email: req });

  return userInfoResponse;
}
/**
 * The module is being exported as userDB so that
 * this module can be imported into other modules.
 */
module.exports = userDB;
