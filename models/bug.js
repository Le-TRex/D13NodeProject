const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const bugSchema = new Schema({
  title: String,
  reproSteps: String,
  priority: Number,
  projectId: ObjectId
});

const Bug = mongoose.model("Bug", bugSchema)

module.exports = Bug;