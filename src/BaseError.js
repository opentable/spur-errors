class BaseError extends Error {

  constructor() {
    super();
  }

  static create(message, internalError, ...args) {
    const errorInstance = new this();

    console.log('args.callee', args.callee);

    Error.captureStackTrace(errorInstance, args.callee);

    if (message) {
      errorInstance.setMessage(message);
    }

    if (internalError) {
      errorInstance.setInternalError(internalError);
    }

    return errorInstance;
  }

  setInternalError(internalError) {
    this.internalError = internalError;
    if (this.internalError && this.internalError.stack) {
      this.stack += '========================================================================\n\n';
      this.stack += this.internalError.stack;
    }

    return this;
  }

  setErrorCode(errorCode) {
    this.errorCode = errorCode;
    return this;
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }
}

export default BaseError;
