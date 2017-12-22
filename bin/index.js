#!/usr/bin/env node
'use strict'

const path = require('path')
const pkg = require('../package.json')
const superb = require('..')

require('update-notifier')({ pkg }).notify()

const cli = require('meow')({
  pkg,
  help: require('fs').readFileSync(path.join(__dirname, 'help.txt'), 'utf8')
})

const { all, ...opts } = cli.flags
const output = all ? superb.words(opts) : superb(opts)

console.log(output)
