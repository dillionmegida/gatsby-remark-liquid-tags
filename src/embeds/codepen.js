const { checkURL } = require("../utils");

/**
 * Get iframe of a codepen
 * @param {String=} param0-url
 * @param {Array=} rest-options
 * @returns {String} iframe
 */
const codepen = ([url, ...options]) => {
	url = checkURL(url);
	if (url === undefined) return;

	const details = url.replace(/^(https:\/\/.*codepen\.io\/)/g, "").split("/"); // to remain 'penOwner/pen/penHash'
	const [penOwner, , penHash] = details;

	let tabs = options.find((option) => option.startsWith("tab="));
	if (tabs !== undefined) tabs = tabs.replace("tab=", "");
	else tabs = "result";

	return `<iframe
        height="400"
        style="width: 100%;"
        scrolling="no"
        title="Pen"
        src="https://codepen.io/${penOwner}/embed/${penHash}?height=400&theme-id=light&default-tab=${tabs}"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        loading="lazy">
	        See the <a href='${url}'>Codepen</a> by ${penOwner}
            (<a href='https://codepen.io/${penOwner}'>@${penOwner}</a>) on
            <a href='https://codepen.io'>CodePen</a>.
	</iframe>

	`;
};

module.exports = codepen;
