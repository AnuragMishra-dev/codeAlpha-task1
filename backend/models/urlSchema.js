import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  originalURLs: {
    type: String,
    required: true,
  },

  shortCodes: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Url", UrlSchema);
