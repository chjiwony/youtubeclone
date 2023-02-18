import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String, //title: {type:Strig}
  description: String,
  createdAt: { type: Date, required: true },
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
}); //define shape of the model

const Video = mongoose.model("Video", videoSchema);
export default Video;
