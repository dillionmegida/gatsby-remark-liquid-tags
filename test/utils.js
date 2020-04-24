const assert = require("chai").assert;
const { breakLiquidTag } = require("../src/utils");

describe("breakLiquidTag", function () {
	let result;

	this.beforeAll(function () {
		const liquidTag =
			"{% codepen https://codepen.io/Dillion/pen/jddJSs tab=html,css %}";
		result = breakLiquidTag(liquidTag);
	});

	it("should return an object with only two properties: tagName & tagOptions", function () {
		for (let property in result) {
			assert.include(["tagName", "tagOptions"], property);
		}
	});

	describe("properties", function () {
		it("tagName must be a string", function () {
			assert.typeOf(result.tagName, "string");
		});

		it("tagOptions must return an array", function () {
			assert.typeOf(result.tagOptions, "array");
		});
	});
});
