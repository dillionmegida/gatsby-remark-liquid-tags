module.exports = getCodepen = (url, options) => {

	let penDetails;
	let host;

	if(url.startsWith('https://www.codepen.io/')
		host = 'https://www.codepen.io/';
	else if(url.startsWith('https://codepen.io/'))
		host = 'https://codepen.io/'
	
	penDetails = url.replace(host, '');

	penDetails = penDetails.replace('/pen/', ' ');

	let penDetailsArr = penDetails.split('');

	let penOwnerArr = [];

	for(let i =0; i < penDetailsArr.length; i++) {
		if(penDetailsArr[i] == ' ') {
			i = penDetailsArr.length;
		} else {
			penOwnerArr.push(penDetailsArr[i]);
		}
	}

	let penOwner = penOwnerArr.join('');

	for(let i = 0; i <= penOwnerOwnerArr.length; i ++) {
		penDetailsArr.shift();
	}

	let penHash = penDetailsArr.join('');

	let opt = null;
	if(options) {
		opt = options.replace('tab=', '');
	}

	return (`
		<iframe height="400" style="width: 100%;" scrolling="no" title="Pen" src="https://codepen.io/${penOwner}/embed/${penHash}?height=400&theme-id=0&default-tab=${opt ? opt : 'result'}" frameborder="no" allowtransparency="true" allowfullscreen="true">
			  <a href='${url}'>See the Pen</a>
		</iframe>

	`);
}