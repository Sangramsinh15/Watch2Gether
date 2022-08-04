const moment = require("moment");
const WatchGroup = require("../../models/watchGroupModel");

/**
 * Collection users
 * All mongodb operations for users is here.
 */

// This logic is for inserting array to mongo db
// exports.insertWatchGroup = async function (req, res) {
//   const watchGroupList = [];
//   const payload = req.body;
//   const keys = Object.keys(payload);

//   keys.forEach((key) => {
//     watchGroupList.push({
//       watchgroup_id: payload[key].id,
//       watchgroup_title: payload[key].title,
//       creation_date: payload[key].day,
//     });
//   });

//   const result = WatchGroup.insertMany(watchGroupList);
//   return res.status(200).send(result.data);
// };

/**
 * Function to insert newly added WatchGroups into mongoDB
 * @param {*} req - The request parameters from the front end
 * @param {*} res - The response from the mongoDB sent to view
 */
exports.insertWatchGroup = function (req, res) {
  const watchGroupData = new WatchGroup();
  const payload = req.body;
  watchGroupData.watchgroup_id = payload.id;
  watchGroupData.watchgroup_title = payload.title;
  watchGroupData.creation_date = payload.day;
  watchGroupData.movie_show_id = payload.movie_show_id;
  //       watchgroup_title: payload[key].title,
  //       creation_date: payload[key].day,
  watchGroupData.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

/**
 * Function to fetch WatchGroups based on the movie/show id from mongoDB
 * @param {*} req - The request parameters from the front end
 * @param {*} res - The response from the mongoDB sent to view
 */
exports.fetchWatchGroup = function (req, res) {
  let formattedDataList = [];
  WatchGroup.find(
    { movie_show_id: req.body.movie_show_id },
    function (err, watchGroupList) {
      if (err) return res.json({ success: false, error: err });
      watchGroupList.forEach((watchGroup) => {
        let formattedData = {};

        formattedData.creation_date = moment(watchGroup.creation_date).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
        formattedData.movie_show_id = watchGroup.movie_show_id;
        formattedData.watchgroup_id = watchGroup.watchgroup_id;
        formattedData.watchgroup_title = watchGroup.watchgroup_title;
        formattedData.userlist = watchGroup.userlist;
        formattedDataList.push(formattedData);
      });
      res.json({ data: formattedDataList });
    }
  );
};

/**
 * Function to fetch WatchGroups based on the user id from mongoDB
 * @param {*} req - The request parameters from the front end
 * @param {*} res - The response from the mongoDB sent to view
 */
exports.fetchWatchGroupByUser = function (req, res) {
  let formattedDataList = [];
  const filter = { userlist: { $elemMatch: { email: req.body.email } } };
  WatchGroup.find(filter, function (err, watchGroupList) {
    if (err) return res.json({ success: false, error: err });
    watchGroupList.forEach((watchGroup) => {
      let formattedData = {};

      formattedData.creation_date = moment(watchGroup.creation_date).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      formattedData.movie_show_id = watchGroup.movie_show_id;
      formattedData.watchgroup_id = watchGroup.watchgroup_id;
      formattedData.watchgroup_title = watchGroup.watchgroup_title;
      formattedData.userlist = watchGroup.userlist;
      formattedDataList.push(formattedData);
    });

    let newArr = [];
    formattedDataList.forEach((data) => {
      data.userlist.forEach((user) => {
        if (user.email === req.body.email) {
          newArr.push(data);
        }
      });
    });

    res.json({ data: newArr });
  });
};
/**
 * Function to fetch WatchGroups based on the watchgroup id from mongoDB
 * @param {*} req - The request parameters from the front end
 * @param {*} res - The response from the mongoDB sent to view
 */
exports.fetchByWatchGroupID = function (req, res) {
  WatchGroup.findOne(
    { watchgroup_id: req.body.watchgroup_id },
    function (err, watchGroup) {
      if (err) return res.json({ success: false, error: err });

      res.json({ data: watchGroup });
    }
  );
};

exports.fetchWatchGroupByUserIDGroupID = function (req, res) {
  const filter = {
    $and: [
      { userlist: { $elemMatch: { email: req.body.email } } },
      { watchgroup_id: req.body.watchgroup_id },
    ],
  };
  WatchGroup.find(filter, function (err, watchGroup) {
    if (err) return res.json({ success: false, error: err });

    res.json({ data: watchGroup });
  });
};

exports.updateWatchGroupByUser = async function (req, res) {
  const filter = { watchgroup_id: req.body.watchgroup_id.toString() };
  const currentUser = req.body.currentUser;
  let doc = await WatchGroup.findOne(filter, function (err, watchGroup) {
    if (err) return res.json({ success: false, error: err });
    if (watchGroup) {
      const updatedWatchGroupUsers = [...watchGroup.userlist, currentUser];
      watchGroup.userlist = updatedWatchGroupUsers;
      watchGroup.save();
      res.json({ data: watchGroup });
    }
  });
};
