module.exports = getYoutube = url => {

	let hash = url;

	return (`
		<iframe width="560" height="400" src="https://www.youtube.com/embed/${hash}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
		</iframe>
	`)
}