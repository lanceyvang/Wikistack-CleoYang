const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

// const Page = sequelize.define('page',{
//     title: Sequelize.STRING,
//     urlTitle: Sequelize.TEXT,
//     content: Sequelize.TEXT,
//     status: Sequelize.BOOLEAN
// });

// const User = sequelize.define('user',{
//     name: Sequelize.STRING,
//     email: Sequelize.STRING
// });


const Page = db.define("page", {
  title: {
    type: Sequelize.STRING
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  }
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = {
  Page: Page,
  User: User
};