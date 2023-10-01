import express from "express";
import * as materialController from "../controllers/materialControllers.js";
const router = express.Router();

router
  .route("/")
  .get(materialController.defaultController)

export default router;