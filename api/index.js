import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoute.js";
import cookieParser from "cookie-parser";
// config env
dotenv.config();

//database config
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

// routes
app.use("/api/auth", authRoutes);

app.listen(5000, (req, res) => {
  console.log("Listening server".bgCyan.white);
});
