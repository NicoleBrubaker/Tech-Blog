const sequelize = require("../config/connection");
const seedUsers = require("./userdata.js");
const seedPosts = require("./postdata.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();

  process.exit(0);
};

seedAll();
