class BaseError extends Error

  constructor: ()->
    super

  @create: (message, internalError)->
    errorInstance = new @
    Error.captureStackTrace(errorInstance, arguments.callee)

    errorInstance.setMessage(message) if message
    errorInstance.setInternalError(internalError) if internalError

    errorInstance

  setInternalError: (@internalError)->
    if @internalError?.stack
      @stack += "========================================================================\n\n"
      @stack += @internalError.stack

    @

  setErrorCode: (@errorCode)-> @

  setMessage: (@message)-> @

  setStatusCode: (@statusCode)-> @

  setData: (@data)-> @

module.exports = BaseError
