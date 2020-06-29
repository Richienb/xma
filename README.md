# xma [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/xma/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/xma)

Parse xml into json or the inverse.

[![NPM Badge](https://nodei.co/npm/xma.png)](https://npmjs.com/package/xma)

## Install

```sh
npm install xma
```

## Usage

```js
const { parseXml, buildXml } = require("xma");

parseXml("<root>Hello World</root>");
//=> { root: "Hello World" }

parseXml(`<root foo="bar">Hello World</root>`);
//=> { root: { _: "Hello World", $: { foo: "bar" } } }

buildXml({ root: "Hello World" });
//=> "<root>Hello World</root>"

buildXml({ root: { _: "Hello World", $: { foo: "bar" } } });
//=> "<root foo="bar">Hello World</root>"
```

## API

### parseXml(xmlString, options?)

Parse xml into json.

#### xmlString

Type: `string`

The xml to parse.

#### options

Type: `object`

The [options](https://www.npmjs.com/package/xml2js#options) to pass to xml2js.

### buildXml(xmlObject, options?)

Build xml from json.

#### xmlObject

Type: `string`

The json object to build.

#### options

Type: `object`

The [options](https://www.npmjs.com/package/xml2js#options-for-the-builder-class) to pass to xml2js.
