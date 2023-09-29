import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import router from "../routes/postRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(express.json());

//redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", router);

//Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

app.get("/", (req, res) => {
  res.json("hello this is the backend ");
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
