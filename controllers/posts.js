import { PostsModel } from "../models/PostsModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createPosts = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostsModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostsModel(updatePost).findOneAndUpdate(
      {
        _id: updatePost._id,
      },
      updatePost,
      { new: true } // data return is new data
    );
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
