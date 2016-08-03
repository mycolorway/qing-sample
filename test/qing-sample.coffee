QingSample = require '../src/qing-sample'
expect = chai.expect

describe 'QingSample', ->

  $el = null
  sample = null

  before ->
    $el = $('<div class="test-el"></div>').appendTo 'body'

  after ->
    $el.remove()
    $el = null

  beforeEach ->
    sample = new QingSample
      el: '.test-el'

  afterEach ->
    sample.destroy()
    sample = null

  it 'should inherit from QingModule', ->
    expect(sample).to.be.instanceof QingModule
    expect(sample).to.be.instanceof QingSample

  it 'should throw error when element not found', ->
    spy = sinon.spy QingSample
    try
      new spy
        el: '.not-exists'
    catch e

    expect(spy.calledWithNew()).to.be.true
    expect(spy.threw()).to.be.true
