import BaseError from './BaseError';

exports.BaseError = BaseError;

class ValidationError extends BaseError {
  static get statusCode() {
    return 400;
  }
  constructor() {
    super();
    this.setStatusCode(400);
    this.setMessage('Validation Error');
    this.setErrorCode('validation_error');
  }
}

class UnauthorizedError extends BaseError {
  static get statusCode() {
    return 401;
  }
  constructor() {
    super();
    this.setStatusCode(401);
    this.setMessage('Unauthorized Error');
    this.setErrorCode('unauthorized_error');
  }
}

class ForbiddenError extends BaseError {
  static get statusCode() {
    return 403;
  }
  constructor() {
    super();
    this.setStatusCode(403);
    this.setMessage('Forbidden Error');
    this.setErrorCode('forbidden_error');
  }
}

class NotFoundError extends BaseError {
  static get statusCode() {
    return 404;
  }
  constructor() {
    super();
    console.log();
    this.setStatusCode(404);
    this.setMessage('Not Found Error');
    this.setErrorCode('not_found_error');
  }
}

class MethodNotAllowedError extends BaseError {
  static get statusCode() {
    return 405;
  }
  constructor() {
    super();
    this.setStatusCode(405);
    this.setMessage('Method not allowed');
    this.setErrorCode('method_not_allowed_error');
  }
}

class RequestTimeoutError extends BaseError {
  static get statusCode() {
    return 408;
  }
  constructor() {
    super();
    this.setStatusCode(408);
    this.setMessage('Request Timeout Error');
    this.setErrorCode('request_timeout_error');
  }
}

class AlreadyExistsError extends BaseError {
  static get statusCode() {
    return 409;
  }
  constructor() {
    super();
    this.setStatusCode(409);
    this.setMessage('Already Exists Error');
    this.setErrorCode('already_exists_error');
  }
}

class InternalServerError extends BaseError {
  static get statusCode() {
    return 500;
  }
  constructor() {
    super();
    this.setStatusCode(500);
    this.setMessage('Internal Server Error');
    this.setErrorCode('internal_server_error');
  }
}

class BadGatewayError extends BaseError {
  static get statusCode() {
    return 502;
  }
  constructor() {
    super();
    this.setStatusCode(502);
    this.setMessage('Bad Gateway Error');
    this.setErrorCode('bad_gateway_error');
  }
}

class ServiceUnavailableError extends BaseError {
  static get statusCode() {
    return 503;
  }
  constructor() {
    super();
    this.setStatusCode(503);
    this.setMessage('Service Unavailable Error');
    this.setErrorCode('service_unavailable_error');
  }
}

class SpurErrors {

  constructor() {
    this.ValidationError = ValidationError;
    this.UnauthorizedError = UnauthorizedError;
    this.ForbiddenError = ForbiddenError;
    this.NotFoundError = NotFoundError;
    this.MethodNotAllowedError = MethodNotAllowedError;
    this.RequestTimeoutError = RequestTimeoutError;
    this.AlreadyExistsError = AlreadyExistsError;
    this.InternalServerError = InternalServerError;
    this.BadGatewayError = BadGatewayError;
    this.ServiceUnavailableError = ServiceUnavailableError;
  }

  static errorByStatusCode(statusCode) {
    const hasProp = {}.hasOwnProperty;

    const keys = Object.keys(exports);
    let value;

    keys.forEach(key => {
      if (hasProp.call(this, key)) {
        const tempValue = this[key];
        if (tempValue.statusCode === statusCode) {
          console.log('found');
          value = tempValue;
        }
      }
    });

    return value;
  }
}

export default new SpurErrors();
