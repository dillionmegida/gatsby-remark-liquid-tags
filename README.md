# 📍 gatsby-remark-liquid-tags

A remark plugin used for custom embeds in markdowns.

<img src='https://travis-ci.org/dillionmegida/gatsby-remark-liquid-tags.svg?branch=master' width='100px'>

## Inspiration

This idea came from the usage of liquid tags in [dev.to (DEV COMMUNITY) platform](https://dev.to) for embedding services in markdowns. [This documented page](https://docs.dev.to/frontend/liquid-tags/) shows their idea behind liquid tags and the tags available.

## Usage

### Install

```shell
npm install --save gatsby-transformer-remark gatsby-remark-liquid-tags
```

_Installing `gatsby-transformer-remark` is not necessary if you have it installed before._

### When to use

This plugin enables custom embeds in markdowns. Check out [the available services](./src/SERVICES.md).

### How to use

1. Add the plugin to your gatsby configuration file (`gatsby-config.js`) in the plugins property of `gatsby-transformer-remark`.

```js
plugins: [
	{
		resolve: `gatsby-transformer-remark`,
		options: {
			plugins: [`gatsby-remark-liquid-tags`],
		},
	},
];
```

2. Use them in markdowns with this syntax - `{% embed-service embed-options %}`
   The embed-options argument may contain the url or other options as required by the tag.

**Note that** the liquid tags must have a line space above and below. This helps the plugin capture the tags correctly. Here's what I mean:

```md
Check out this codepen:

{% codepen https://codepen.io/Dillion/pen/GRKLJBP tab=html,css %}

The codepen shows the online text editor I created.
```

### Examples

Please check out this file: [SERVICES.md](./src/SERVICES.md) to see an example of each of the services available.

### Contributions

Contributions are highly welcome: [Feature requests](https://github.com/dillionmegida/gatsby-remark-liquid-tags/issues/new/choose), [Pull requests](https://github.com/dillionmegida/gatsby-remark-liquid-tags/pulls), [Bug report](https://github.com/dillionmegida/gatsby-remark-liquid-tags/issues/new/choose), documentation fixes and so on.

If you'd like to add more embeds, you can get insights from the [Dev.to Liquid tags page](https://dev.to/p/editor_guide#liquidtags)

If you'd like to create a pull request, kindly go through the documentation here - [CONTRIBUTION.md](CONTRIBUTION.md) to help you get started.

### Author

[Dillion Megida](https://dillionmegida.com/about)

## Related plugins

-   [gatsby-remark-embedder](https://www.npmjs.com/package/gatsby-remark-embedder)

### License

MIT
