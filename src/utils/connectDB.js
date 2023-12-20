import mongoose from "mongoose";

const dbName = "shop";

async function connectDB() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URL, {
        dbName: dbName,
      });
      console.log("Connected to DB");
    }
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

export default connectDB;