const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch'); // node only; not needed in browsers
const config = require('../../config');

const rpc = new JsonRpc(config.endpoint, { fetch });

const list = async (req, res) => {
  try {
    const info = await rpc.get_info();
    const promises = [];
    for (let i = info.head_block_num - 9; i <= info.head_block_num; i++) {
      promises.push(await rpc.get_block(i));
    }
    const result = await Promise.all(promises);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.list = list;
