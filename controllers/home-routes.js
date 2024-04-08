const router = require("express").Router();
const { Post } = require("./../models");
const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["date", "DESC"]],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.userId },
      order: [["date", "DESC"]],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.get("/newpost", withAuth, async (req, res) => {
  res.render("newpost", {
    user_id: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const postInstance = await Post.findOne({ where: { id: id } });

    const post = postInstance.get({ plain: true });
    console.log(post);

    res.render("blogpost", { post });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});


module.exports = router;
