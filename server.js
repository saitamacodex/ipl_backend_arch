import http from "node:http";
import "dotenv/config";
import { createApp } from "./src/app.js";
import { connectDb } from "./src/common/config/db.js";

async function start() {
  try {
    const port = process.env.PORT || 8180;
    const db_url = process.env.MONGODB_URI;

    // db connection
    await connectDb(db_url);

    // start your server
    const server = http.createServer(createApp());
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server: ", error);
    process.exit(1);
  }
}

start();
