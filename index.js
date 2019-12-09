'use strict'

const uniqueRandomArray = require('unique-random-array')
const get = require('dlv')

const prefixes = require('./prefixes.json')
const words = require('./words.json')

const randomWord = uniqueRandomArray(words)
const randomPrefix = uniqueRandomArray(prefixes)

const titleize = str => str.charAt(0).toUpperCase() + str.slice(1)

const getPrefix = prefix => (typeof prefix === 'boolean' ? `${randomPrefix()} ` : prefix)

const getWord = (item, { isPlural, isFemale }) => {
  const quantity = isPlural ? 'plural' : 'singular'
  const gender = isFemale ? 'Female' : 'Male'
  return get(item, `${quantity}${gender}`, `${quantity}${isFemale ? 'Male' : 'Female'}`)
}

const getValue = (
  item,
  { capitalize = false, plural: isPlural = false, female: isFemale = false, prefix = false } = {}
) => {
  const word = getWord(item, { isPlural, isFemale })
  const adverb = prefix ? getPrefix(prefix) : ''
  const value = `${adverb}${word}`
  return capitalize ? titleize(value) : value
}

module.exports = opts => getValue(randomWord(), opts)
module.exports.words = opts => words.map(item => getValue(item, opts))
module.exports.prefixes = () => prefixes
