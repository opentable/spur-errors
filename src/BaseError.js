const BaseError = {
  create(message, internalError) {
    Error.captureStackTrace(this);
    const error = Object.assign(new Error(), BaseError);
    if (message) {
      error.message = message;
    }
    if (internalError) {
      error.internalError = internalError;
    }
    return error;
  },

  extend(statusCode, defaultMessage, errorCode) {
    return {
      statusCode,
      create(message, internalError) {
        return Object.assign(
          BaseError.create(message || defaultMessage, internalError),
          { statusCode, errorCode }
        );
      }
    };
  },

  set internalError(internalError) {
    if (internalError && internalError.stack) {
      this.stack += '========================================================================\n\n';
      this.stack += internalError.stack;
    }
  },

  setErrorCode(errorCode) {
    this.errorCode = errorCode;
    return this;
  },

  setMessage(message) {
    this.message = message;
    return this;
  },

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  },

  setData(data) {
    this.data = data;
    return this;
  }
};

module.exports = BaseError;
