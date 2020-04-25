const { checkURL } = require("../utils");

/**
 * Get iframe of jsfiddle
 * @param {String=} param0-url
 * @param {Array=} rest-options
 * @returns {String} iframe
 */
const jsfiddle = ([url, ...options]) => {
    url = checkURL(url);
    if(url === undefined) return;

    const {hostname, pathname } = new URL(url)
    url = hostname + pathname // we need only jsfiddle.net...

	let theme = options.find((option) => option.startsWith("theme="));
	if (theme !== undefined) theme = theme.replace("theme=", "");
	else theme = "light";

	if (!["light", "dark"].includes(theme)) theme = "light";

	return `<iframe
        width="100%"
        height="300"
        src="//${url}/embedded/js,html,css,result/${theme}/"
        allowfullscreen="allowfullscreen"
        allowpaymentrequest
        frameborder="0">
    </iframe>`;
};

module.exports = jsfiddle;
