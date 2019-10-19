// const fetch = require('node-fetch');

// module.exports = getGitHub = url => (

// 	let spacedRepoDetails = url.replace(',', '');
// 	let repoDetailsArr = url.split('');

// 	fetch(`https://api.github.com/repos/${owner}/${repo}/contents/README.md`)
// 	.then(res => res.json())
// 	.then(res => (`
// 		<iframe width="560" height="315" src="data:html;base64,${res.content}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
// 		</iframe>
// 	`))
// )

// getGitHub();