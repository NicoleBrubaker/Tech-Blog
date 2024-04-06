const router = require("express").Router();
const { Post } = require("./../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["date", "DESC"]], // Adjust ordering as needed
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.get("/newpost", async (req, res) => {
  res.render("newpost");
});


// router.get("/blog:id")

// router.get("/login", async (req, res) => {
//   res.render("login");
// });

// router.get("/user", async (req, res) => {
//   res.render("user");
// });

module.exports = router;
