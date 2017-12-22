'use strict'

const uniqueRandomArray = require('unique-random-array')
const words = require('./words.json')

const randomWord = uniqueRandomArray(words)

module.exports = ({ plural = false } = {}) => randomWord()[plural ? 1 : 0]
module.exports.words = ({ plural = false } = {}) =>
  words.map(item => item[plural ? 1 : 0])
