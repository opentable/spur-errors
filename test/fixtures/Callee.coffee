SpurErrors = require "#{rootDir}"


module.exports = new class Test

  run:()->
    SpurErrors.NotFoundError.create()