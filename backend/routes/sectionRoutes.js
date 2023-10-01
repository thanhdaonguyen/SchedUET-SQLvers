import express from "express";
import * as sectionController from "../controllers/sectionControllers.js";
const router = express.Router();

router
  .route("/")
  .get(sectionController.defaultController)

export default router;