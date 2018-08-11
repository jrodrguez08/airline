const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const logger = require('./utils/logging');
global.logger = logger;
global.log = logger.log;

const app = express();
const routes = require('./routes/index');
const port = process.env.PORT || 3000;

const passport = require('./services/authService').init(app, config);

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}));

app.use(bodyParser.json({
  limit: '1mb'
}));

routes(app, passport);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {useNewUrlParser: true});