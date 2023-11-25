const mongoose = require('mongoose');
const config = require('./config')
mongoose.set('strictQuery', false);

const dbConnector = async () => {
  try {
    await mongoose.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false

    })
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
