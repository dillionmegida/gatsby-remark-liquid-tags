
const { checkURL } = require("../utils");

/**
 * Get iframe of a slide from slide.com
 * @param {String=} param0-url
 * @returns {String} iframe
 */
const slides = ([url]) => {
    url = checkURL(url);
    if(url === undefined) return;

    return `<iframe
        src="${url}/embed"
        width="600"
        height="420"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen>
    </iframe>
`
};

module.exports = slides;