import SpurErrors from '../../src/SpurErrors';
import Callee from '../fixtures/Callee';

describe('SpurErrors;', () => {
  it('test error', () => {
    const notFound1 = SpurErrors.NotFoundError.create('could not find it');
    const notFound2 = SpurErrors.NotFoundError.create('where is it?', notFound1);
    console.log('getting past create');

    const e = SpurErrors.BaseError.create('leaf error', notFound2)
      .setErrorCode('leaf_error')
      .stack;

    console.log(e);
  });

  xit('test callee', () => {
    const callee = Callee;
    console.error(callee.run().stack);
  });

  xit('errorByStatusCode()', () => {
    expect(SpurErrors.errorByStatusCode(999)).to.equal(undefined);
    expect(SpurErrors.errorByStatusCode(503))
      .to.equal(SpurErrors.ServiceUnavailableError);
  });
});
