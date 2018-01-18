'use strict'

const uniqueRandomArray = require('unique-random-array')
const prefixes = require('./prefixes.json')
const words = require('./words.json')

const randomWord = uniqueRandomArray(words)
const randomPrefix = uniqueRandomArray(prefixes)

const titleize = str => str.charAt(0).toUpperCase() + str.slice(1)

const getPrefix = prefix =>
  typeof prefix === 'boolean' ? `${randomPrefix()} ` : prefix

const getValue = (
  item,
  { capitalize = false, plural: isPlural = false, prefix = false } = {}
) => {
  const { singular, plural } = item
  const word = isPlural ? plural : singular
  const adverb = prefix ? getPrefix(prefix) : ''
  const value = `${adverb}${word}`

  return capitalize ? titleize(value) : value
}

module.exports = opts => getValue(randomWord(), opts)
module.exports.words = opts => words.map(item => getValue(item, opts))
module.exports.prefixes = () => prefixes
