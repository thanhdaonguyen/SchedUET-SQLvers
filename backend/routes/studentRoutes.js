import express from "express";
import * as studentController from "../controllers/studentControllers.js";
const router = express.Router();

router
  .route("/")
  .get(studentController.defaultController)

export default router;