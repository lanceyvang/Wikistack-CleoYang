const express = require('express');
app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const Sequelize = require("sequelize");
const models = require('./models');


//Nunjucks Boilerplate
const env = nunjucks.configure('view', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//Static MiddleWare
app.use(express.static(path.join(__dirname, "/public")));

// SYNC
models.User.sync()
  .then(function() {
    console.log("User table created!");
    return models.Page.sync();
  })
  .then(function() {
    console.log("Page table created!");
    app.listen(3000, function() {
      console.log("Server is listening on port 3000!");
    });
  })
  .catch(console.error.bind(console));