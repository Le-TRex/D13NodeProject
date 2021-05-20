const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;


const userStorySchema = new Schema({
  title: String,
  description: String,
  acceptanceCriteria: String,
  priority: Number,
  projectId: ObjectId
});

const UserStory = mongoose.model("UserStory", userStorySchema)

module.exports = UserStory;