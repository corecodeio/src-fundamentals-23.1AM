const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    server_port: process.env.PORT || 4000,
    // db: {
    //     name: 'db',
    //     port: 27017,
    //     url: 'localhost',
    //     user: 'leonardo',
    //     pass: '12345678'
    // }
}