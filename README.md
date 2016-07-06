<img src="https://opentable.github.io/spur/logos/Spur-Errors.png?rand=1" width="100%" alt="Spur: Errors" />

Common error builder utility for [Node.js](http://nodejs.org/). Contains common error types, and stack trace tracking to support more detailed error messages.

[![NPM version](https://badge.fury.io/js/spur-errors.png)](http://badge.fury.io/js/spur-errors)
[![Build Status](https://travis-ci.org/opentable/spur-errors.png?branch=master)](https://travis-ci.org/opentable/spur-errors)
[![Coverage Status](https://coveralls.io/repos/github/opentable/spur-errors/badge.svg?branch=master)](https://coveralls.io/github/opentable/spur-errors?branch=master)

# About the Spur Framework

The Spur Framework is a collection of commonly used Node.JS libraries used to create common application types with shared libraries.

[Visit NPMJS.org for a full list of Spur Framework libraries](https://www.npmjs.com/browse/keyword/spur-framework) >>

# Usage

## Install from NPM

```shell
$ npm install --save spur-errors
```

## Require and use the module

```javascript
let SpurErrors = require("spur-errors");

SpurErrors.NotFoundError.create("could not find it");
```
# API

The API is designed to be daisy chained with all of the following base commands that are a part of all of the error types.

## Base Object Commands

#### .create(message, nativeError) -> instance

Creates an instance of a SpurError for the type used.

```javascript
try {
  ...
}
catch(err) {
  SpurErrors.NotFound.create("Some error", err);
}
```

#### .setErrorCode(errorCode) -> instance

Sets an error code to later be used by error handlers.

```javascript
SpurErrors.NotFound.create("Not found").setErrorCode("leaf_error");
```

#### .setMessage(message) -> instance

Overrides the error message passed in.

```javascript
SpurErrors.NotFound.create("Not found").setMessage("Unable to find the restaurant.");
```

#### .setStatusCode(statusCode) -> instance

Setting the response status code to be sent back down to the client.

```javascript
SpurErrors.NotFound.create("Not found").setStatusCode(404);
```

#### .setData(data) -> instance

Sets customizable data that can be used down the error stack chain.

```javascript
SpurErrors.NotFound.create("Not found").setData({headers: req.headers});
```

## Properties

| Property      | Description                                                                         |
| :------------ | :---------------------------------------------------------------------------------- |
| internalError | The original error object passed in                                                 |
| message       | Either passed in during the create call or during the parsing of the internal error |
| stack         | Parsed from the originally passed in internal error                                 |
| errorCode     | Custom error code                                                                   |
| statusCode    | Custom status code to be used by the Express.JS response                            |
| data          | Custom data object to be used anyone in the flow                                    |

## Error Types

| Error Type              | Status Code | Message                   | Error Code                |
| :---------------------- | :---------- | :------------------------ | :------------------------ |
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

### Error type example

```javascript
SpurErrors.ValidationError.create("Invalid input");
// => {statusCode: 400, message: "Validation Error", errorCode: "validation_error", ....}
```

# Maintainers

This library is maintained by

  - Agustin Colchado – ***[@acolchado](https://github.com/acolchado)***

## Collaborators

- Ash – ***[@ssetem](https://github.com/ssetem)***
- Timmy Willison – ***[@timmywil](https://github.com/timmywil)***


# Contributing

## We accept pull requests

Please send in pull requests and they will be reviewed in a timely manner. Please review this [generic guide to submitting a good pull requests](https://github.com/blog/1943-how-to-write-the-perfect-pull-request). The only things we ask in addition are the following:

 * Please submit small pull requests
 * Provide a good description of the changes
 * Code changes must include tests
 * Be nice to each other in comments. :innocent:

## Style guide

The majority of the settings are controlled using an [EditorConfig](.editorconfig) configuration file. To use it [please download a plugin](http://editorconfig.org/#download) for your editor of choice.

## All tests should pass

To run the test suite, first install the dependancies, then run `npm test`

```bash
$ npm install
$ npm run build
$ npm test
```

# License

[MIT](LICENSE)
