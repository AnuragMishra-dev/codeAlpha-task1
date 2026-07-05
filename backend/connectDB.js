import mongoose from "mongoose";

const connectDB = async() => {
  try {
    const connect = await mongoose.connect(process.env.MONOGO_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
