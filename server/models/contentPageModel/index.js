const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the contentPageSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const contentPageSchema = new mongoose.Schema({
  movie_show_id: { type: String, required: true },
  watchGroupList: [
    {
      watchgroup_id: String,
      email: String,
      creation_date: String,
      watchgroup_title: String,
    },
  ],
});

const ContentPage = mongoose.model(
  "ContentPage",
  contentPageSchema,
  "contentSchema"
);

/**
 * The module is being exported as 'ContentPage'
 * so that this module can be imported into other modules. 
 */
module.exports = ContentPage;
