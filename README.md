<img src="https://opentable.github.io/spur/logos/Spur-Errors.png?rand=1" width="100%" alt="Spur: Errors" />

Common error builder utility for [Node.js](http://nodejs.org/). Contains common error types, and stack trace tracking to support more detailed error messages.

[![NPM version](https://badge.fury.io/js/spur-errors.png)](http://badge.fury.io/js/spur-errors)
[![Build Status](https://travis-ci.org/opentable/spur-errors.png?branch=master)](https://travis-ci.org/opentable/spur-errors)


## Usage

### Install from NPM

```shell
$ npm install --save spur-errors
```

### Require and use the module

```javascript
var SpurErrors = require("spur-errors");

SpurErrors.NotFoundError.create("could not find it")
```
## API

The API is designed to be daisy chained with all of the following base commands that are a part of all of the error types.

### Base Object Commands

#### .create(message, nativeError) -> instance

Creates an instance of a SpurError for the type used.

```javascript
try {
  ...
}
catch(err) {
  SpurErrors.NotFound.create("Some error", err)
}
```

#### .setErrorCode(errorCode) -> instance

Sets an error code to later be used by error handlers.

```javascript
SpurErrors.NotFound.create("Not found").setErrorCode("leaf_error")
```

#### .setMessage(message) -> instance

Overrides the error message passed in.

```javascript
SpurErrors.NotFound.create("Not found").setMessage("Unable to find the restaurant.")
```

#### .setStatusCode(statusCode) -> instance

Setting the response status code to be sent back down to the client.

```javascript
SpurErrors.NotFound.create("Not found").setStatusCode(404)
```

#### .setData(data) -> instance

Sets customizable data that can be used down the error stack chain.

```javascript
SpurErrors.NotFound.create("Not found").setData({headers: req.headers})
```

### Properties

| Property      | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| internalError | The original error object passed in                                                 |
| message       | Either passed in during the create call or during the parsing of the internal error |
| stack         | Parsed from the originally passed in internal error                                 |
| errorCode     | Custom error code                                                                   |
| statusCode    | Custom status code to be used by the Express.JS response                            |
| data          | Custom data object to be used anyone in the flow                                    |

### Error Types

| Error Type              | Status Code | Message                   | Error Code                |
| ----------------------- | ----------- | ------------------------- | ------------------------- |
| ValidationError         | 400         | Validation Error          | validation_error          |
| UnauthorizedError       | 401         | Unauthorized Error        | unauthorized_error        |
| ForbiddenError          | 403         | Forbidden Error           | forbidden_error           |
| NotFoundError           | 404         | Not Found Error           | not_found_error           |
| MethodNotAllowedError   | 405         | Method not allowed        | method_not_allowed_error  |
| RequestTimeoutError     | 408         | Request Timeout Error     | request_timeout_error     |
| AlreadyExistsError      | 409         | Already Exists Error      | already_exists_error      |
| InternalServerError     | 500         | Internal Server Error     | internal_server_error     |
| BadGatewayError         | 502         | Bad Gateway Error         | bad_gateway_error         |
| ServiceUnavailableError | 503         | Service Unavailable Error | service_unavailable_error |

#### Error type example

```javascript
SpurErrors.ValidationError.create("Invalid input")
// => {statusCode: 400, message: "Validation Error", errorCode: "validation_error", ....}
```

## Running the unit tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## Maintainers

This library is maintained by

  - Ash – ***[@ssetem](https://github.com/ssetem)***
  - Agustin Colchado – ***[@acolchado](https://github.com/acolchado)***

## License

The MIT License (MIT)

Copyright (c) 2015 Spur Framework.

Copyright (c) 2015 OpenTable Inc. and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
