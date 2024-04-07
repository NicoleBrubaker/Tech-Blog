const { Post } = require("../models");

const postdata = [
  {
    user_id: 1,
    author: "Nicole",
    date: "04/03/2024",
    title: "Tech Title",
    body: "Here is the body of my blog article",
  },
  {
    user_id: 2,
    author: "Joe",
    date: "04/03/2024",
    title: "Tech Title 2",
    body: "Here is the body of my blog article",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
