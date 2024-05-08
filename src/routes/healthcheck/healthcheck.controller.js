const { getHealthcheck } = require("./healthcheck.service");

const controller = {
  async get({ res }) {
    const data = getHealthcheck();
    res.status(200).json(data);
  },
};

module.exports = controller;
