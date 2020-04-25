/**
 * Get iframe of a codesandbox
 * @param {String=} param0-hash
 * @returns {String} iframe
 */
const codesandbox = ([hash]) => {
	return `<iframe
        src="https://codesandbox.io/embed/${hash}?fontsize=14&hidenavigation=1&theme=dark"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="${hash}"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
    </iframe>`;
};

module.exports = codesandbox;
