import SpurErrors from '../../src/SpurErrors';

module.exports = {
  run() {
    return SpurErrors.NotFoundError.create();
  }
};
