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
      const singular = superb.words()
      const plural = superb.words({ plural: true })

      should(singular).instanceOf(Array)
      should(plural).instanceOf(Array)
      should(singular).not.eql(plural)
    })
  })
})
