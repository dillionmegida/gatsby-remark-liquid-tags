const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

const { breakLiquidTag } = require("./utils");

const getCodepen = require("./embeds/codepen");
const getYoutube = require("./embeds/youtube");
const getCodesandbox = require("./embeds/codesandbox");
const getGoogleslides = require("./embeds/google-slides");
const getJsfiddle = require("./embeds/jsfiddle");
const getSlides = require("./embeds/slides");
const getSoundcloud = require("./embeds/soundcloud");

// twitter is a work in progress, having issues because it returns a promise
// const getTwitter = require("./embeds/twitter");

module.exports = ({ markdownAST }) => {
	visit(markdownAST, "paragraph", node => {
		// Grab the innerText of the paragraph node
		let text = toString(node);

		// Test paragraph if it includes a liquid tag format
		let exp = /{\%.*\%}/g;
		const matches = text.match(exp);

		// Only show embeds for liquid tags
		if (matches !== null) {
			let tagDetails = breakLiquidTag(matches[0]); // only interested in the first match
			let { tagName, tagOptions } = tagDetails;

            let embed;
            
			// check the tagname to know which embed is to be used
			switch (tagName) {
				case "codepen":
					embed = getCodepen(tagOptions);
					break;
				case "youtube":
					embed = getYoutube(tagOptions);
					break;
				case "codesandbox":
					embed = getCodesandbox(tagOptions);
					break;
				case "google-slides":
					embed = getGoogleslides(tagOptions);
					break;
				case "jsfiddle":
					embed = getJsfiddle(tagOptions);
					break;
				case "slides":
					embed = getSlides(tagOptions);
					break;
				case "soundcloud":
					embed = getSoundcloud(tagOptions);
					break;
			}

			if (embed === undefined) return;

			node.type = "html";
			node.children = undefined;
			node.value = text.replace(exp, embed);
		}
	});

	return markdownAST;
};
