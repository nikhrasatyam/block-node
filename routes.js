const path = require('path');
const config = require('./config');
const block = require('./api/block');

module.exports = (app) => {
  app.use('/api/blocks', block);
  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(`${config.publicPath}/index.html`));
  });
};
