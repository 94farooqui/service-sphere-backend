import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import router from "./routes/router.js";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());
app.use(router);

connectDB();

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello world" });
});

app.listen(9000, () => {
  console.log("Server is runnig on port 9000");
});
