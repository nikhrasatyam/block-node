const path = require('path');

module.exports = {
  port: 8080,
  ip: process.env.IP || '0.0.0.0',
  env: 'development',
  publicPath: path.normalize(`${__dirname}/build`),
  endpoint: 'https://api.eosnewyork.io',
};
