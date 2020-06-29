"use strict"

const xml = require("xml2js")
const isPlainObject = require("is-plain-obj")

const defaultOptions = {
	strict: true,
	async: false,
	attrkey: "$",
	charkey: "_",
	headless: true
}

exports.parseXml = (xmlString, options = {}) => {
	if (typeof xmlString !== "string") {
		throw new TypeError(`Expected a string in the first argument, got ${typeof xmlString}`)
	}

	if (!isPlainObject(options)) {
		throw new TypeError(`Expected a plain object in the second argument, got ${typeof options}`)
	}

	options = {
		...defaultOptions,
		...options
	}

	let value
	xml.parseString(xmlString, options, (error, result) => {
		if (error) {
			throw error
		}

		value = result
	})

	return value
}

exports.buildXml = (xmlObject, options = {}) => {
	if (!isPlainObject(xmlObject)) {
		throw new TypeError(`Expected a plain object in the first argument, got ${typeof xmlObject}`)
	}

	if (!isPlainObject(options)) {
		throw new TypeError(`Expected a plain object in the second argument, got ${typeof options}`)
	}

	options = {
		...defaultOptions,
		...options
	}

	const builder = new xml.Builder(options)

	return builder.buildObject(xmlObject)
}
