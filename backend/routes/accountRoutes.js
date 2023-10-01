import express from "express";
import * as accountController from "../controllers/accountControllers.js";
const router = express.Router();

router
  .route("/")
  .get(accountController.defaultController)

export default router;