import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import router from "./routes/BugRouter.js";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello world" });
});

app.listen(9000, () => {
  console.log("Server is runnig on port 9000");
});
