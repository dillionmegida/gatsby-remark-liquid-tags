module.exports getYoutube = url => {

	let host;
	let videoHash;

	if(url.startsWith('https://www.youtube.com/')
		host = 'https://www.youtube.com/';
	else if(url.startsWith('https://youtube.com/'))
		host = 'https://youtube.com/'

	videoHash = url.replace('embed/', '');

	return (`
		<iframe width="560" height="400" src="https://www.youtube.com/embed/${videoHash}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
		</iframe>
	`)
}