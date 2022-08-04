const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the schedularSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const schedularSchema = new mongoose.Schema({
  title: { type: String, required: true },
  day: { type: Number, required: true },
  id: { type: Number, required: true },
});

const Schedular = mongoose.model("schedularData", schedularSchema);
/**
 * The module is being exported as 'Schedular'
 * so that this module can be imported into other modules. 
 */
module.exports = Schedular;