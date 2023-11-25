const mongoose = require('mongoose');
const config = require('./config')
mongoose.set('strictQuery', false);

const dbConnector = async () => {
  try {
   const mongooseConnection =  await mongoose.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(mongoose.connection.readyState);
    return mongooseConnection
  }
  catch (error) {
    console.log('dbConnector error: ' + error.message)
  }
}





module.exports = dbConnector;


// module.exports = () => {
//   return mongoose.connect(config.dbURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   });
// };
