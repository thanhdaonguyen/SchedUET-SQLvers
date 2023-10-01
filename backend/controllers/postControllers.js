import Post from "../models/Post.js";

const getAllPosts = async (req, res, next) => {
  let [data, _] = await Post.findAll();
  res.json(data);
};

const createNewPost = async (req, res, next) => {
  res.send("create new post route");
};

const getPostById = async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await Post.findById(id);
  res.json(data);
};

export { getAllPosts, getPostById, createNewPost };
