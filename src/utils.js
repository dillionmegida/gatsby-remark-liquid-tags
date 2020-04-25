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
	let verfiedURL = "";

	if (url.startsWith("https://www" || url.startsWith("https://")))
		verfiedURL = url;
	// URL is in bad format
	else return;

    // remove trailing slash
    verifiedURL = url.replace(/\/{1,}$/, "");
    
    return verfiedURL;
};

module.exports = { breakLiquidTag, checkURL };
