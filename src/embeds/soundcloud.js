const { checkURL } = require("../utils");

/**
 * Get the iframe of song from soundcloud
 * @param {String=} param0 url
 * @returns {String} iframe
 */
const soundcloud = ([url]) => {
	url = checkURL(url);
	if (url === undefined) return;

	return `<iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=${url}">
    </iframe>`;
};

module.exports = soundcloud;
