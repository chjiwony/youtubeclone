import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true }, //title: {type:Strig}
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
}); //define shape of the model

const Video = mongoose.model("Video", videoSchema);
export default Video;
