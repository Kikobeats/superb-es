# superb-es

<p align="center">
  <br>
  <img src="https://i.imgur.com/MhF8yoZ.png" alt="superb-es">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/superb-es.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/superb-es/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/superb-es)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/superb-es.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/superb-es)
[![Dependency status](https://img.shields.io/david/Kikobeats/superb-es.svg?style=flat-square)](https://david-dm.org/Kikobeats/superb-es)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/superb-es.svg?style=flat-square)](https://david-dm.org/Kikobeats/superb-es#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/superb-es.svg?style=flat-square)](https://www.npmjs.org/package/superb-es)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Get superb (spanish) like words.

## Install

```bash
$ npm install superb-es --global
```

## Usage

```js
const superb = require('superb-es')

superb()
// => 'máquina'

superb()
// => 'fiera'

superb({plural: true})
// => 'cracks'

superb.words()
// => ['máquina', 'fiera', …]

superb.words({plural: true})
// => ['máquinas', 'fieras', …]
```

## CLI

```bash
$ superb-es --help

  Examples
    $ superb-es
    máquina

    $ superb-es --all
    crack
    fiera
    …
    
    $ superb-es --all --plural
    cracks
    fieras
    …

  Options
    --plural  Get all the plurals words
    --all     Get all the words instead of a random word
```

## API

### superb([options])

Get a singular random [superb like word](words.json).

#### options

##### plural

Get a plural random word.

### superb.words([options])

Type: `function`

Get all the singular words.

#### options

##### plural

Type: `boolean`</br>
default: `false`

Get all the plural words.

## License

**superb-es** © [Kiko Beats](https://kikobeats.com), Released under the [MIT](https://github.com/Kikobeats/superb-es/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/superb-es/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
