global.__basedir = __dirname;
require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const dbConnector = require('./config/db');

const app = require('express')();
require('./config/express')(app);
const cors = require('cors');
const apiRouter = require('./router');
const config = require('./config/config');
const { errorHandler } = require('./utils');
app.use(cors({
  origin: config.origin,
  credentials: true
}));

if (process.env.NODE_ENV === 'development') {
  app.use('/api', apiRouter);
  app.use(errorHandler);
  app.listen(config.port, console.log(`Listening on port ${config.port}!`));
} else {
  app.use('/', apiRouter);
  app.use(errorHandler);
}
// dbConnector()
//   .then(() => {
//     if (process.env.NODE_ENV !== 'production') {
//       app.listen(config.port, console.log(`Listening on port ${config.port}!`));
//     }
//   })
//  .catch(console.error);
exports.api = functions.https.onRequest(app);