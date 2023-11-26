const env = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
//mongodb://127.0.0.1:27017/Car-Shop
const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/Car-Shop',
        origin: ['http://localhost:5555', 'http://localhost:5173', 'http://localhost:5174']
    },
    production: {
        port: process.env.PORT || 4000,
        dbURL: process.env.CONNECTION,
        origin: ['http://localhost:5555', 'http://localhost:5173', 'https://car-shop-6b1fb.firebaseapp.com', 'https://car-shop-6b1fb.web.app']
    }
};

module.exports = config[env];
