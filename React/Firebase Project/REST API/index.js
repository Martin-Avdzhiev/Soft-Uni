global.__basedir = __dirname;
require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const dbConnector = require('./config/db');

const app = require('express')();
const cors = require('cors');
const apiRouter = require('./router');
const config = require('./config/config');
const { errorHandler } = require('./utils');
app.use(cors({
  origin: config.origin,
  credentials: true
}));
app.use('/api', apiRouter);
app.use(errorHandler);
require('./config/express')(app);


dbConnector()
  .then(() => {
    if (process.env.NODE_ENV !== 'production') {
      app.listen(config.port, console.log(`Listening on port ${config.port}!`));
    }

  })
  .catch(console.error);
exports.api = functions.https.onRequest(app);