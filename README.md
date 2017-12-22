# superb-spanish

<p align="center">
  <br>
  <img src="https://i.imgur.com/Mh13XWB.gif" alt="superb-spanish">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/superb-spanish.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/superb-spanish/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/superb-spanish)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/superb-spanish.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/superb-spanish)
[![Dependency status](https://img.shields.io/david/Kikobeats/superb-spanish.svg?style=flat-square)](https://david-dm.org/Kikobeats/superb-spanish)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/superb-spanish.svg?style=flat-square)](https://david-dm.org/Kikobeats/superb-spanish#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/superb-spanish.svg?style=flat-square)](https://www.npmjs.org/package/superb-spanish)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Get superb (spanish) like words.

## Install

```bash
$ npm install superb-spanish --global
```

## Usage

```js
const superb = require('superb-spanish')

superb()
//=> 'máquina'

superb()
//=> 'fiera'

superb.words
//=> ['máquina', 'fiera', …]
```

## CLI

```bash
$ superb --help

  Examples
    $ superb
    máquina

    $ superb --all
    crack
    fiera
    …

  Options
    --all  Get all the words instead of a random word
```

## API

### superb()

Type: `string`

Random [superb like word](words.json).

### superb.words

Type: `array`

All the words.

## License

**superb-spanish** © [Kiko Beats](https://kikobeats.com), Released under the [MIT](https://github.com/Kikobeats/superb-spanish/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/superb-spanish/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
