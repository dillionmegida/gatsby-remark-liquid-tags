const fetch = require('node-fetch');

// const getTwitter = async (url) => {
// 	try {
// 		const res = await fetch(`https://publish.twitter.com/oembed?url=${url}&dnt=true&omit_script=true`);
// 		// fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/primncube551/status/1185255528206868480&dnt=true&omit_script=true`)
// 		const data = await res.json();
// 		return data.html;
// 	} catch(err) {
// 		console.log(err);
// 	}
// }

// module.exports = getTwitter

module.exports = (async (url) => {

		let embed;

		await fetch(`https://publish.twitter.com/oembed?url=${url}&dnt=true&omit_script=true`)
		// fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/primncube551/status/1185255528206868480&dnt=true&omit_script=true`)
		.then(res => await (res.json()	))
		.then(res => embed = (res.html))
		.catch(err => console.log(err))

		return embed;

	})

// getTwitter();


// const fetch = require('node-fetch');

// module.exports = getTwitter = async url => {

// 	try {
// 		const res = await fetch(`https://publish.twitter.com/oembed?url=${url}&dnt=true&omit_script=true`);
// 		// fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/primncube551/status/1185255528206868480&dnt=true&omit_script=true`)
// 		const data = await res.json();
// 		return data.html
// 	} catch (err) {
// 		console.log(err.message)
// 	}
// 		.then(res => res.html)
// 		.catch(err => console.log(err))
// 	}

// }
// // getTwitter();