import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import corsOption from "./src/config/config";
console.log("NODE_ENV: ", process.env.NODE_ENVIROMENT);
const app = express();

//app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use((req: Request, res: Response) => {
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  // res.setHeader('Access-Control-Allow-Credentials'); // If needed
});

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Ok server is online." });
});

export default app;
