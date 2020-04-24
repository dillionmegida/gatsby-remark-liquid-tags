/**
 * Get youtube iframe
 * @param {Array=} options
 * @returns {String} iframe
 */
const youtube = ([hash]) => {
	return `
		<iframe width="560" height="400" src="https://www.youtube.com/embed/${hash}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
		</iframe>
	`;
};

module.exports = youtube;
