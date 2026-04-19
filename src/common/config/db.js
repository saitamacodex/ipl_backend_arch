import mongoose from "mongoose";

export async function connectDb(uri) {
  if (!uri) {
    throw new Error("MongoDB URI is required");
  }

  try {
    const dbConnection = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${dbConnection.connection.host}`);
    return dbConnection;
  } catch (error) {
    console.error("Error Connection: ", error);
    process.exit(1);
  }
}
