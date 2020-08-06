/**
 * Break the liquid tag into service name and options
 * @param {String=} tag
 * @returns {Object} service and options in an object
 */
const breakLiquidTag = (tag) => {
	// replace multiple spaces with just one space
	tag = tag.replace(/\s{2,}/g, " ");

	const pieces = tag.split(" ");
	const [, tagName, ...tagOptions] = pieces;

	// remove %}
	tagOptions.splice(tagOptions.length - 1, 1);

	return {
		tagName,
		tagOptions,
	};
};

const checkURL = (url) => {
  return url.startsWith("https://") ? removeTrailingSlash(url) : null;
};

const removeTrailingSlash = (url) => {
  return url.replace(/\/+$/, "");
};

module.exports = { breakLiquidTag, checkURL };
