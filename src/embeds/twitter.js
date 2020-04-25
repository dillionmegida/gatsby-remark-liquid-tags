const { checkURL } = require("../utils");

// work in progress...

// const axios = require("axios");

/**
 * Get the blockquote of a tweet
 * @param {String=} url
 * @returns {String} blockquote
 */
const twitter = async ([url]) => {
	url = checkURL(url);
	if (url === undefined) return;

	try {
		const result = await axios.get(
			`https://publish.twitter.com/oembed?url=${url}&dnt=true&omit_script=true`
		);

		let html = await result.data.html;
		html = replace(/<br>/g, "<br/ >").replace(/\?ref_src=twsrc.*?fw/g, "");
		return html;
	} catch {
		return `<blockquote>Unable to get tweet! Please check your network connection or verify the tweet url</blockquote>
        `;
	}
};

module.exports = twitter;
