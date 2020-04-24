/**
 * Get iframe of a codepen
 * @param {Array=} options expecting the url format to be - 'https://codepen.io/<pen-owner>/pen/<pen-hash>'
 * @returns {String} iframe
 */
const codepen = ([url, ...options]) => {
	if (url.length === "") return;

	let host;

	if (url.startsWith("https://www.codepen.io/"))
		host = "https://www.codepen.io/";
	else if (url.startsWith("https://codepen.io/"))
		host = "https://codepen.io/";
	else return;

	const details = url.replace(host, "").split("/");
    const [penOwner, , penHash] = details;
    
	let tabs = options.find((option) => option.startsWith("tab="));
	if (tabs !== undefined) tabs = tabs.replace("tab=", "");
	else tabs = "result";

	return `
		<iframe height="400" style="width: 100%;" scrolling="no" title="Pen" src="https://codepen.io/${penOwner}/embed/${penHash}?height=400&theme-id=light&default-tab=${tabs}" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
	See the <a href='${url}'>Codepen</a> by ${penOwner}
	(<a href='https://codepen.io/${penOwner}'>@${penOwner}</a>) on <a href='https://codepen.io'>CodePen</a>.
	</iframe>

	`;
};

module.exports = codepen;
