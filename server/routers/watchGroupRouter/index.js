const watchGroupRouter = require("express").Router();
const watchGroupService = require("../../middleware/watchGroupService");

/**
 * This router is to create a POST API for creating the watchGroup.
 * This API can be tested on Postman
 * with route '/wg/watchGroup' at the end of the server_url.
 */
watchGroupRouter.post("/watchGroup", watchGroupService.insertWatchGroup);
/**
 * This router is to create a POST API for fetching the watchGroup.
 * This API can be tested on Postman
 * with route '/wg/fetchwatchGroup' at the end of the server_url.
 */
watchGroupRouter.post("/fetchWatchGroup", watchGroupService.fetchWatchGroup);
/**
 * This router is to create a POST API for fetching the watchGroup according to the user id .
 * This API can be tested on Postman
 * with route '/wg/fetchwatchGroupByUser' at the end of the server_url.
 */
watchGroupRouter.post(
  "/fetchWatchGroupByUser",
  watchGroupService.fetchWatchGroupByUser
);
/**
 * This router is to create a POST API for creating the watchGroup according to the specified watchGroupID.
 * This API can be tested on Postman
 * with route '/wg/fetchWatchGroupID' at the end of the server_url.
 */
watchGroupRouter.post(
  "/fetchByWatchGroupID",
  watchGroupService.fetchByWatchGroupID
);

watchGroupRouter.post(
  "/fetchWatchGroupByUserIDGroupID",
  watchGroupService.fetchWatchGroupByUserIDGroupID
);

watchGroupRouter.post(
  "/updateWatchGroupByUser",
  watchGroupService.updateWatchGroupByUser
);

/**
 * The module is being exported as router
 * so that this module can be imported into other modules.
 */
module.exports = watchGroupRouter;
