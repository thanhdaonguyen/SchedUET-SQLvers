import express from "express";
import * as postController from "../controllers/postControllers.js";
const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost);

router.route("/:id").get(postController.getPostById);

export default router;
