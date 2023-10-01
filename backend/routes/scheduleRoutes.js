import express from "express";
import * as scheduleController from "../controllers/scheduleControllers.js";
const router = express.Router();

router
  .route("/")
  .get(scheduleController.defaultController)

export default router;