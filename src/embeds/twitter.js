const fetch = require('node-fetch');

module.exports = getTwitter = url => (
	fetch(`https://publish.twitter.com/oembed?url=${url}&dnt=true&omit_script=true`)
	.then(res => res.json())
	.then(res => res.html)
)



getTwitter();