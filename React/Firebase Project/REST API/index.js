global.__basedir = __dirname;
require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors');
// const config = require('./config/config');
const { errorHandler } = require('./utils');
const app = require('express')();
const config = require('./config/config');
app.use(cors({
  origin: config.origin,
  credentials: true
}));
app.use('/api', apiRouter);
app.use(errorHandler);
require('./config/express')(app);
if(!process.env.NODE_ENV){
  app.listen(config.port, console.log(`Listening on port ${config.port}!`));
}
// dbConnector()
//   .then(() => {
//     //app.listen(config.port, console.log(`Listening on port ${config.port}!`));
//   })
//   .catch(console.error);
exports.api = functions.https.onRequest(app);