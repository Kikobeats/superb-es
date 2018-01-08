'use strict'

const should = require('should')
const superb = require('..')

describe('superb spanish', () => {
  describe('constructor', () => {
    it('singular and lowercase by default', () => {
      const word = superb()
      should(word[0]).be.eql(word[0].toLowerCase())
      should(superb.words().includes(word)).be.true()
    })

    it('capialize support', () => {
      const word = superb({ capitalize: true })
      should(word[0]).be.eql(word[0].toUpperCase())
    })

    it('plural support', () => {
      const word = superb({ plural: true })
      should(superb.words({ plural: true }).includes(word)).be.true()
    })

    it('custom prefix support', () => {
      const word = superb({ prefix: 'er_' })
      should(word.includes('er')).be.true()
    })

    it('prefix support', () => {
      const word = superb({ prefix: true })
      const [prefix] = word.split(' ')
      should(superb.prefixes().includes(prefix)).be.true()
    })
  })

  describe('.word', () => {
    it('return an array of words', () => {
      const singular = superb.words()
      const plural = superb.words({ plural: true })

      should(singular).instanceOf(Array)
      should(plural).instanceOf(Array)
      should(singular).not.eql(plural)
    })
  })
})
