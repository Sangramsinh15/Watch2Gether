const router = require("express").Router();
const discussionService = require("../../middleware/watchGroupService");
/**
 * This router is to create a POST API for returning the user data based on the discussionThread.
 * This API can be tested on Postman
 * with route '/cp/contentPage' at the end of the server_url.
 */
router.post("/discussionThread", (req, res) => {
  const { movie_show_id } = req.body;
  try {
    discussionService(movie_show_id).then((user) => {
      return res.json(user);
    });
  } catch (err) {
    res.json({ error: "Unable to display profile" });
  }
});
/**
 * The module is being exported as router 
 * so that this module can be imported into other modules.
 */
module.exports = router;
