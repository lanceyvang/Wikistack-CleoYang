const express = require('express');
app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const nunjucks = require('nunjucks');

const env = nunjucks.configure('view', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen('3000', console.log('Server is running.'));