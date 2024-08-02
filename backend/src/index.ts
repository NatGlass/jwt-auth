import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectToDatabase } from "./config/db";
import { APP_ORIGIN, PORT } from "./constants/env";
import errorHandler from "./middlewares/errorHandler";
import { OK } from "./constants/http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(OK).json({
    status: "Healthy",
  });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`);

  await connectToDatabase();
});
