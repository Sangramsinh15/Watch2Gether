const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passwordHash: { type: String, required: true },

  phone: { type: Number },
  address: { type: String },

  total_points: { type: Number },
  Watchgroup: [
    { content_id: Number, content_name: String, schedule_date: Date },
  ],
});

const User = mongoose.model("user", userSchema, "users");
/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules. 
 */
module.exports = User;
