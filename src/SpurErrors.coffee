

class BaseError extends Error

  constructor:()->
    super

  @create:(message, internalError)->
    errorInstance = new @
    Error.captureStackTrace(errorInstance, arguments.callee)

    errorInstance.setMessage(message) if message
    errorInstance.setInternalError(internalError) if internalError

    errorInstance


  setInternalError:(@internalError)->
    if @internalError?.stack
      @stack += "========================================================================\n"
      @stack += @internalError.stack
    @


  setErrorCode:(@errorCode)-> @
  setMessage:(@message)-> @

  setStatusCode:(@statusCode)-> @
  setData:(@data)-> @

class NotFoundError extends BaseError
  constructor:()->
    super
    @setStatusCode(404)
    @setMessage("Not Found")
    @setErrorCode("not_found")

module.exports = {
  BaseError, NotFoundError
}