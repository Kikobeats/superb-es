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
    it('return an array of singular words', () => {
      should(superb.singular).instanceOf(Array)
    })
    it('return an array of plural words', () => {
      should(superb.plural).instanceOf(Array)
    })
  })
})
