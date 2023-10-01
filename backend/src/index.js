import express from "express";
import dotenv from "dotenv";

//import routers
import router from "../routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(express.json());
app.use(express.static("./public"))

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
  // res.json("hello this is the backend ");
  res.redirect("http://localhost:8000/main.html")
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
