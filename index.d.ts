import { Except } from "type-fest"
import { OptionsV2 } from "xml2js"

export type Options = Except<OptionsV2, "async">

/**
Parse xml into json.
@param xmlString The xml to parse.
@param options The [options](https://www.npmjs.com/package/xml2js#options) to pass to xml2js.
@example
```
const { parseXml } = require("xma");

parseXml("<root>Hello World</root>");
//=> { root: "Hello World" }

parseXml(`<root foo="bar">Hello World</root>`);
//=> { root: { _: "Hello World", $: { foo: "bar" } } }
```
*/
export declare function parseXml(xmlString: string, options?: Options): object

/**
Build xml from json.
@param xmlObject The json object to build.
@param options The [options](https://www.npmjs.com/package/xml2js#options-for-the-builder-class) to pass to xml2js.
@example
```
const { buildXml } = require("xma");

buildXml({ root: "Hello World" });
//=> "<root>Hello World</root>"

buildXml({ root: { _: "Hello World", $: { foo: "bar" } } });
//=> "<root foo="bar">Hello World</root>"
```
*/
export declare function buildXml(xmlObject: object, options?: Options): string
