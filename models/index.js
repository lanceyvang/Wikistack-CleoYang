const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

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
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    get(){
      return "/wiki/"+ this.getDataValue('urlTitle');
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};