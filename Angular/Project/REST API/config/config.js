const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/crypto',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/crypto',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    }
};

module.exports = config[env];
