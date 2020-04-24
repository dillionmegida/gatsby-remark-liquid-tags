# 📍 gatsby-remark-liquid-tags

A template plugin used for custom embeds in markdowns.

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

### Examples

For our example, we'll be using codepen and youtube.

**The tags have to be specified with empty line spaces above and beneath the line**. Somewhere in your markdown:

```
Check out this pen:
-----line-space
{% codepen https://codepen.io/Dillion/pen/bGGeZON tab=result,html %}
-----line-space
Watch this video:
-----line-space
{% youtube WoPI_7fnKlM %}
```

#### Result

-   For codepen

```html
<iframe
	height="400"
	style="width: 100%;"
	scrolling="no"
	title="Pen"
	src="https://codepen.io/Dillion/embed/bGGeZON?height=400&theme-id=light&default-tab=result,html"
	frameborder="no"
	allowtransparency="true"
	allowfullscreen="true"
	loading="lazy"
>
	See the <a href="https://codepen.io/Dillion/pen/bGGeZON">Codepen</a> by
	Dillion (<a href="https://codepen.io/Dillion">@Dillion</a>) on
	<a href="https://codepen.io">CodePen</a>.
</iframe>
```

    The codepen tag uses the link to the pen and the optional tab option for the tab to display

-   For youtube

```html
<iframe
	width="560"
	height="400"
	src="https://www.youtube.com/embed/WoPI_7fnKlM"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
>
</iframe>
```

    The youtube tab uses the hash at the end of the url to get the iframe

### Contributions

Contributions are highly welcome: [Feature requests](https://github.com/dillionmegida/gatsby-remark-liquid-tags/issues/new/choose), [Pull requests](https://github.com/dillionmegida/gatsby-remark-liquid-tags/pulls), [Bug report](https://github.com/dillionmegida/gatsby-remark-liquid-tags/issues/new/choose), documentation fixes and so on.

If you'd like to add more embeds, you can get insights from the [Dev.to Liquid tags page](https://docs.dev.to/frontend/liquid-tags/)

#### How To Create a pull request

**Ensure you have some markdown files to work with**

-   Fork this repository
-   Place the downloaded folder in a 'plugins' folder in the root directory so that you can test it locally.
-   Change your location to the `gatsby-remark-liquid-tags` folder.
    -   `cd plugins/gatsby-remark-liquid-tags`
-   Install dependencies
    -   `npm install`
-   Add the plugin to `gatsby-config` as shown above.
-   Make your changes in development mode
-   Push and make a pull request.

### Author

[Dillion Megida](https://dillionmegida.com/about)

## Related plugins

-   [gatsby-remark-embedder](https://www.npmjs.com/package/gatsby-remark-embedder)

### License

MIT
