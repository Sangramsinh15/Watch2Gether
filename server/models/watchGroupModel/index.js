const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the watchGroupSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const watchGroupSchema = new mongoose.Schema({
  author: { type: String },
  movie_show_id: { type: Number },
  watchgroup_id: { type: Number },
  watchgroup_title: { type: String },
  creation_date: { type: Date, default: Date.now },

  userlist: [
    {
      firstName: String,
      lastName: String,
      email: String,
      total_points: String,
    },
  ],
});

/**
 * The first param is the name for the "model" for exporting, second param is the schema name, and
 * the third param is the collection name.
 */

const WatchGroup = mongoose.model("WatchGroup", watchGroupSchema, "watchGroup");
/**
 * The module is being exported as 'WatchGroup'
 * so that this module can be imported into other modules.
 */
module.exports = WatchGroup;
