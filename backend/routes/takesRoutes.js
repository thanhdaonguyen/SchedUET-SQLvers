import express from "express";
import * as takesController from "../controllers/takesControllers.js";
const router = express.Router();

router
  .route("/")
  .get(takesController.defaultController)

export default router;