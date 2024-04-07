const express = require("express");
const router = express.Router();
const { Post } = require("./../../models");

router.post("/", async (req, res) => {
  try {
    // Getting all data
    const { user_id, author, date, title, body } = req.body;

    // Create a new post
    const newPost = await Post.create({
      user_id,
      author,
      date,
      title,
      body,
    });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


// Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["date", "DESC"]],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
