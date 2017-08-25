const SpurErrors = require('../../src/SpurErrors');

module.exports = {

  run() {
    return SpurErrors.NotFoundError.create();
  }
};
