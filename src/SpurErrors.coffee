BaseError = require "./BaseError"

exports.BaseError = BaseError

class exports.ValidationError extends BaseError
  @statusCode:400
  constructor: ()->
    @setStatusCode(400)
    @setMessage("Validation Error")
    @setErrorCode("validation_error")
    super

class exports.UnauthorizedError extends BaseError
  @statusCode:401
  constructor: ()->
    @setStatusCode(401)
    @setMessage("Unauthorized Error")
    @setErrorCode("unauthorized_error")
    super

class exports.ForbiddenError extends BaseError
  @statusCode:403
  constructor: ()->
    @setStatusCode(403)
    @setMessage("Forbidden Error")
    @setErrorCode("forbidden_error")
    super

class exports.NotFoundError extends BaseError
  @statusCode:404
  constructor: ()->
    @setStatusCode(404)
    @setMessage("Not Found Error")
    @setErrorCode("not_found_error")
    super

class exports.MethodNotAllowedError extends BaseError
  @statusCode:405
  constructor: ()->
    @setStatusCode(405)
    @setMessage("Method not allowed")
    @setErrorCode("method_not_allowed_error")
    super

class exports.RequestTimeoutError extends BaseError
  @statusCode:408
  constructor: ()->
    @setStatusCode(408)
    @setMessage("Request Timeout Error")
    @setErrorCode("request_timeout_error")
    super

class exports.AlreadyExistsError extends BaseError
  @statusCode:409
  constructor: ()->
    @setStatusCode(409)
    @setMessage("Already Exists Error")
    @setErrorCode("already_exists_error")
    super

class exports.InternalServerError extends BaseError
  @statusCode:500
  constructor: ()->
    @setStatusCode(500)
    @setMessage("Internal Server Error")
    @setErrorCode("internal_server_error")
    super

class exports.BadGatewayError extends BaseError
  @statusCode:502
  constructor: ()->
    @setStatusCode(502)
    @setMessage("Bad Gateway Error")
    @setErrorCode("bad_gateway_error")
    super

class exports.ServiceUnavailableError extends BaseError
  @statusCode:503
  constructor: ()->
    @setStatusCode(503)
    @setMessage("Service Unavailable Error")
    @setErrorCode("service_unavailable_error")
    super

exports.errorByStatusCode = (statusCode)->
  for own k,v of exports
    return v if v.statusCode is statusCode
