# gatsby-remark-liquid-tags
A template plugin used for custom embeds in markdowns e.g codepens, etc

### Dependencies
`unist-util-visit` - [Check the docs](https://github.com/syntax-tree/unist-util-visit)

### Install
```shell
npm install --save gatsby-transformer-remark gatsby-remark-liquid-tags
```

### When to use
This plugin enables custom embeds in markdowns. At the moment, it only allows codepens. This can be useful when making project examples.

### How to use 
1. Add the plugin to your gatsby configuration file.
```js
// In your gatsby-config.js
plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-liquid-tags`
            ]
        }
    }
]
```

2. Use them in markdowns with this syntax - `{% embed-site embed-url embed-options %}`
The embed-options argument is optional.
Example:
```markdown
Check out this pen {% codepen https://codepen.io/Dillion/pen/bGGeZON tab=result %}
```

### Contributions
Contributions are highly welcome to enable more embeds such as tweets, GitHub repositories, Stackoverflow questions, etc. 

#### How To Contribute
Ensure you have some markdown files to work with
- Fork this repository or download
- Place the folder in a 'plugins' folder in the root directory.
- Change your location to the `gatsby-remark-liquid-tags` folder.
  - `cd plugins/gatsby-remark-liquid-tags`
- Install dependencies
  - `npm i`
- Add the plugin to `gatsby-config` as shown above.
- Make your changes in development mode
- Push and make a pull request.