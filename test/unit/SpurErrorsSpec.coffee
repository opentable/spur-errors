SpurErrors = require "#{rootDir}"

describe.only "SpurErrors", ->

  beforeEach ->


  it "should exist", ->
    expect(SpurErrors).to.exist

  it "test error", ->


    notFound1 = SpurErrors.NotFoundError.create("could not find it")

    notFound2 = SpurErrors.NotFoundError.create("where is it?", notFound1)

    e = SpurErrors.BaseError.create("leaf error", notFound2)
      .setErrorCode("leaf_error")
      .stack

    console.log e

  it "test callee", ->
    callee = require "../Fixtures/Callee"
    console.error callee.run().stack

  it "errorByStatusCode()", ->
    expect(SpurErrors.errorByStatusCode(999)).to.equal undefined
    expect(SpurErrors.errorByStatusCode(503))
      .to.equal SpurErrors.ServiceUnavailableError

