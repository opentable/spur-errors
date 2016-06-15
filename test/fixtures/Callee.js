import SpurErrors from '../../src/SpurErrors';

class Test {
  run(){
    return SpurErrors.NotFoundError.create();
  }
};

module.exports = new Test();
