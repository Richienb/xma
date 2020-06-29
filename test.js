const test = require("ava")
const { parseXml, buildXml } = require(".")

test("parse xml", t => {
	t.deepEqual(parseXml("<root>Hello World</root>"), { root: "Hello World" })
	t.deepEqual(parseXml("<root foo=\"bar\">Hello World</root>"), { root: { _: "Hello World", $: { foo: "bar" } } })
})

test("build xml", t => {
	t.is(buildXml({ root: "Hello World" }), "<root>Hello World</root>")
	t.is(buildXml({ root: { _: "Hello World", $: { foo: "bar" } } }), "<root foo=\"bar\">Hello World</root>")
})
