import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trime: true, maxLength: 80 }, //title: {type:Strig}
  description: { type: String, required: true, trime: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
}); //define shape of the model

const Video = mongoose.model("Video", videoSchema);
export default Video;
