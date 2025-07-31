import mongoose from 'mongoose';
import {ENV} from "./env.js";


export const connectDB = async () => {
  try {
    console.log("Loaded MONGO_URI:", ENV.MONGO_URI);
    await mongoose.connect(ENV.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}