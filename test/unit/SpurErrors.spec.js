const SpurErrors = require('../../src/SpurErrors');
const Callee = require('../fixtures/Callee');

describe('SpurErrors;', () => {
  it('test error', () => {
    const notFound1 = SpurErrors.NotFoundError.create('could not find it');
    const notFound2 = SpurErrors.NotFoundError.create('where is it?', notFound1);
    const e = SpurErrors.BaseError.create('leaf error', notFound2)
      .setErrorCode('leaf_error')
      .stack;

    console.log(e);
  });

  it('test callee', () => {
    const callee = Callee;
    console.error(callee.run().stack);
  });

  it('errorByStatusCode()', () => {
    expect(SpurErrors.errorByStatusCode(999)).to.equal(undefined);
    expect(SpurErrors.errorByStatusCode(503))
      .to.equal(SpurErrors.ServiceUnavailableError);
  });

  it('should have all required error constructors', () => {
    const requiredErrors = [
      'ValidationError',
      'UnauthorizedError',
      'ForbiddenError',
      'NotFoundError',
      'MethodNotAllowedError',
      'RequestTimeoutError',
      'AlreadyExistsError',
      'InternalServerError',
      'BadGatewayError',
      'ServiceUnavailableError',
      'GatewayTimeoutError'
    ];

    requiredErrors
      .forEach((errorName) => {
        expect(SpurErrors[errorName]).to.be.an('object');
      });
  });
});
