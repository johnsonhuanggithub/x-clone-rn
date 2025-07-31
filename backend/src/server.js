import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";  

const app = express();

connectDB();

app.get('/', (req, res) => {  res.send('Hello World!');});

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
export default app;