import express from "express";
import * as scheduleControllers from "../controllers/scheduleControllers.js";
const router = express.Router();

router
  .route("/")
  .get(scheduleControllers.getAllPosts)
  .post(scheduleControllers.createNewPost);

router.route("/:id").get(scheduleControllers.getPostById);

export default router;