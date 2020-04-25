const { checkURL } = require("../utils");

/**
 * Get iframe of a google slide
 * @param {String=} param0-public_url
 * @returns {String} iframe
 */
const googleSlides = ([public_url]) => {
	public_url = checkURL(public_url);
	if (public_url === undefined) return;

	public_url = public_url.replace("pub", "embed");

	return `<iframe
        src="${public_url}"
        frameborder="0"
        width="100%"
        height="569"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true">
    </iframe>`;
};

module.exports = googleSlides;
