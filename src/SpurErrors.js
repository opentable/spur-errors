const BaseError = require('./BaseError');

const SpurErrors = {
  BaseError,

  ValidationError: BaseError.extend(400, 'Validation Error', 'validation_error'),
  UnauthorizedError: BaseError.extend(401, 'Unauthorized Error', 'unauthorized_error'),
  ForbiddenError: BaseError.extend(403, 'Forbidden Error', 'forbidden_error'),
  NotFoundError: BaseError.extend(404, 'Not Found Error', 'not_found_error'),
  MethodNotAllowedError: BaseError.extend(405, 'Method Not Allowed', 'method_not_allowed_error'),
  RequestTimeoutError: BaseError.extend(408, 'Request Timeout Error', 'request_timeout_error'),
  AlreadyExistsError: BaseError.extend(409, 'Already Exists Error', 'already_exists_error'),
  InternalServerError: BaseError.extend(500, 'Internal Server Error', 'internal_server_error'),
  BadGatewayError: BaseError.extend(502, 'Bad Gateway Error', 'bad_gateway_error'),
  ServiceUnavailableError: BaseError.extend(503, 'Service Unavailable Error', 'service_unavailable_error'),

  errorByStatusCode(statusCode) {
    const errorNames = Object.keys(SpurErrors);
    let spurError;
    errorNames.forEach((name) => {
      const error = SpurErrors[name];
      if (error.statusCode === statusCode) {
        spurError = error;
      }
    });
    return spurError;
  }
};

module.exports = SpurErrors;
