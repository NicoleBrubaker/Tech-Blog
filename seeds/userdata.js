const { User } = require("../models");

const userdata = [
  {
    firstname: "Nicole",
    email: "sample@sample.com",
    password: "abcABC123",
  },
  {
    firstname: "Joe",
    email: "sample2@sample.com",
    password: "aasdasdfggh",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
