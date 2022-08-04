const jwt = require("jsonwebtoken");
/**
 * The function auth is responsible for creating a token in cookies. 
 * The constant "token" is used to create a new token.
 * The constant "verified" is used to check if the token is valid.
 * @param {*} req : The request object passed as the first argument for 
 * this function auth to make the request of jwt verification for the user
 * @param {*} res : The response object passed as the second argument for 
 * this function auth to sent the response whether it's an error or success
 * @param {*} next : The next object passed as the third argument for 
 * this function auth to call the next() function of jwt.
 * @returns : returns whether the user is authorized or not using the status of jwt.verify 
 */
function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;

    next();
  } catch (err) {
    /**
     * Send an error response to the console with message Unauthorized.
     */
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}
/**
 * The module is being exported as auth so that this module can be imported into other modules. 
 */
module.exports = auth;
