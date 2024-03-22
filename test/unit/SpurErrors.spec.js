const SpurErrors = require('../../src/SpurErrors');
const Callee = require('../fixtures/Callee');

describe('SpurErrors;', function () {
  it('test error', () => {
    const notFound1 = SpurErrors.NotFoundError.create('could not find it');
    const notFound2 = SpurErrors.NotFoundError.create('where is it?', notFound1);
    const e = SpurErrors.BaseError.create('leaf error', notFound2)
      .setErrorCode('leaf_error')
      .stack;

      expect(e).toBeDefined();
  });

  it('test callee', () => {
    const callee = Callee;
    const result = callee.run();

    expect(result.message).toBe('Not Found Error');
    expect(result.statusCode).toBe(404);
  });

  it('errorByStatusCode()', () => {
    expect(SpurErrors.errorByStatusCode(999)).toBeUndefined();
    expect(SpurErrors.errorByStatusCode(503))
      .toEqual(SpurErrors.ServiceUnavailableError);
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
        expect(SpurErrors[errorName]).toBeInstanceOf(Object);
      });
  });
});
