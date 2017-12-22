'use strict'

const should = require('should')
const superb = require('..')

describe('superb spanish', () => {
  describe('constructor', () => {
    it('length is greater than zero', () => {
      should(superb().length > 0)
    })
  })

  describe('.word', () => {
    it('return an array', () => {
      should(superb.words).instanceOf(Array)
    })
  })
})
