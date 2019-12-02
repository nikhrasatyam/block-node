const path = require('path');
const config = require('./config');

module.exports = (app) => {
  app.use('/api/blocks', require('./api/block'));
  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(`${config.publicPath}/index.html`));
  });
};
