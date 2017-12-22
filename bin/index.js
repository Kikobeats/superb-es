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

console.log(cli.flags.all ? superb.words.join('\n') : superb())
