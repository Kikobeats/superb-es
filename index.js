'use strict'

const uniqueRandomArray = require('unique-random-array')
const words = require('./words.json')

const randomWord = uniqueRandomArray(words)
const _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const getValue = (item, { capitalize = false, plural = false } = {}) => {
  const word = item[plural ? 1 : 0]
  return capitalize ? _capitalize(word) : word
}

module.exports = opts => getValue(randomWord(), opts)
module.exports.words = opts => words.map(item => getValue(item, opts))
